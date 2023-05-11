import React, { Component,useState } from 'react'
import { Currency, Lot } from "./Lot.ts";
import {  useEffect } from 'react';
import axios from 'axios';
export default function LotList (){
    const [lotlist, SetLotList] = useState();
    const GetList = function(){
        let list = [];
        axios.get("http://localhost:5088/api/Lot").then(res=>
        {
            for(let item of res.data)
            {
                list.push(new Lot(item.ownerCurrency,item.requiredCurrency,item.price,item.ownerName));
            }
            let mappedlist = list.map(t=><div className="card col w-100">
            <div className="card-header card-h-bg">
              {t.OwnerCurrency} - {t.RequiredCurrency}
            </div>
            <div className="card-body card-b-bg">
              <h5 className="card-title">{t.price}{t.requiredCurrency} for one</h5>
              <p className="card-text">Author: {t.OwnerName}</p>
              <a href="#" className="btn btn-primary">buy</a>
            </div>
          </div>);
            SetLotList(mappedlist);
        });
    }
    useEffect(() => {
        GetList();
        const interval = setInterval(() => GetList(), 10000);
    
        return () => clearInterval(interval);
      }, []);
    // GetList();
    return <>
    <div className='container'>
        <div class="row">{lotlist}</div>
    </div>
    <button className='btn btn-danger' onClick={GetList}>RABOTAI BLEAT</button>
    </>    
}
