import React, { Component,useState } from 'react'
import { Currency, Lot } from "./Lot.ts";
import {  useEffect } from 'react';
import axios from 'axios';
export default function LotList (){
    const [serverUrl,SetServerURL] = useState("http://localhost:5088/api/Lot");
    const [lotlist, SetLotList] = useState();
    const getcurrencylist = function () {
      let str = [];
      for (var item in Currency) str.push(item);
      return str;
    };
    const [currencylist,SetCurrencyList]=useState();
    const SearchButtonHandler = event=>{
      let from = document.querySelector("#From");
      let fromValue = from[from.selectedIndex].text;
      let to = document.querySelector("#To");
      let toValue = to[to.selectedIndex].text;
      let url = "";
      console.log(fromValue);
      console.log(toValue);
      if(fromValue=="All"&&toValue=="All")
      {
        url = "http://localhost:5088/api/Lot"
        console.log("find all");
      }
      else if(toValue=="All")
      {
        url = `http://localhost:5088/api/Lot/from/${fromValue}`;
        console.log(`http://localhost:5088/api/Lot/from/${fromValue}`);
      }
      else if(fromValue=="All")
      {
        url =`http://localhost:5088/api/Lot/to/${toValue}`;
        console.log(`http://localhost:5088/api/Lot/to/${toValue}`);
      }
      else
      {
        url = `http://localhost:5088/api/Lot/${fromValue}/${toValue}`;
        console.log(`http://localhost:5088/api/Lot/${fromValue}/${toValue}`);
      }
       SetServerURL(url);
      console.log(serverUrl);
    }
    const GetList = function(){
        let list = [];
        console.log(serverUrl);
        let ServerUrl = serverUrl;
        if(serverUrl==undefined)
        {
          SetServerURL("http://localhost:5088/api/Lot");
          ServerUrl = "http://localhost:5088/api/Lot";
        }
        console.log(serverUrl);
        axios.get(ServerUrl).then(res=>
        {
            for(let item of res.data)
            {
                list.push(new Lot(item.ownerCurrency,item.requiredCurrency,item.price,item.ownerName));
            }
            let mappedlist = list.map(t=><div className="card p-0">
            <div className="card-header card-h-bg">
              {t.OwnerCurrency} - {t.RequiredCurrency}
            </div>
            <div className="card-body card-b-bg">
              <h5 className="card-title">{t.Price}{t.RequiredCurrency} for one</h5>
              <p className="card-text">Author: {t.OwnerName}</p>
              <a href="#" className="btn btn-primary">buy</a>
            </div>
          </div>);
            SetLotList(mappedlist);
        });
    }
    useEffect(() => {
        SetServerURL("http://localhost:5088/api/Lot")
        GetList();
        SetCurrencyList(getcurrencylist().map((t) => <option>{t}</option>));
        const interval = setInterval(() => GetList(), 10000);
    
        return () => clearInterval(interval);
      }, []);
      // useEffect(()=>
      // {
      //   console.log("server url from from effect"+serverUrl)
      // },[serverUrl])
    // GetList();
    return <>
    <div className='container'>
        <div className='row p-3 flexheader'>
            <div className='w-25' >
                <label className='control-label flexlbl'>
                  <h4>From:</h4>
                <select className='form-select' id='From'>
                  <option>All
                  </option>
                    {currencylist}
                </select>
                </label>
            </div>
            <div className='w-25'>
                <label className='control-label flexlbl'>
                  <h4>To:</h4>
                <select className='form-select' id='To'>
                  <option>All
                  </option>
                    {currencylist}
                </select>
                </label>
            </div>
            <div className='w-25'>
              
            <button className='btn btn-secondary p-2 w-50' onClick={SearchButtonHandler}> Search</button>
            
            </div>
        </div>
        <div className="row row-cols-5">{lotlist}</div>
    </div>
    </>    
}
