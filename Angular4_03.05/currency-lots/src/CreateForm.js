import { Link, json } from "react-router-dom";
import { Currency, Lot } from "./Lot.ts";
import axios from 'axios';
export default function CreateForm() {
  const getcurrencylist = function () {
    let str = [];
    for (var item in Currency) str.push(item);
    return str;
  };
  const createbuttonhandler = event=>{
      event.preventDefault();
      let form = event.target;
      console.log(form[3].value);
      let lot =new Lot(form[1].value,form[2].value,form[3].value,form[0].value);
      console.log(lot);
      // let response = fetch("http://localhost:5088/api/Lot",{method:"GET",body: JSON.stringify(list)});
      axios.post("http://localhost:5088/api/Lot",lot).then(res=>{
        console.log(res);
      });
  }
  const currencylist = getcurrencylist().map((t) => <option>{t}</option>);
  return (
    <>
      <form className="w-25 position-absolute top-50 start-50 translate-middle" onSubmit={createbuttonhandler}>
      <h2 className="text-center">Create new lot</h2>
        
        {/* <div className="m-1">
            <label className="control-label w-100">
                Enter your name:
                <input type="text" className="form-control" name="OwnerName"></input>
            </label>
        </div> */}
        <div className="form-floating  m-1">
           <input type="text" className="form-control" required id="floatingInput" placeholder="name@example.com" name="OwnerName"></input>
           <label htmlFor="floatingInput">Your name</label>
          </div>

        <div className="form-floating m-1">
          <select
            className="form-select"
            id="floatingSelect1"
            required
            aria-label="Floating label select example"
            name="OwnerCurrency"
          >
            <option defaultValue={true}>Open this select menu</option>
            {currencylist}
          </select>
          <label htmlFor="floatingSelect1">Select your currency</label>
        </div>
        <div className="form-floating m-1">
          <select
            className="form-select"
            id="floatingSelect2"
            aria-label="Floating label select example"
            name="RequiredCurrency"
            required
          >
            <option  defaultValue={true}>Open this select menu</option>
            {currencylist}
          </select>
          <label htmlFor="floatingSelect2">Select payment currency</label>
        </div>
        <div className="form-floating  m-1">
           <input type="number" step=".0001" className="form-control" required  id="floatingInput3" name="Price"></input>
           <label htmlFor="floatingInput3">Price for one</label>
          </div>
        <div className="btn-group w-100">
          <button className="btn btn-success m-1" >Create lot</button>
          <Link to="/list" className="btn btn-primary m-1">Back to list</Link>
        </div>
        
      </form>
    </>
  );
}
