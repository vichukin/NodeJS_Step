import { HttpClient,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs"
import {map} from "rxjs/operators"
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  getUser(){
    return this.http.get("assets/user.json")
  }
  getUsers(){
    return this.http.get("assets/users.json")
  }
  getUserList():Observable<User[]>{
    return this.http.get("assets/list.json").pipe(map((data:any)=>{
      let userList=data["userlist"];
      return userList.map((item:any)=>{
        return {name: item.userName, age: item.userAge}
      });
    }))
  }
  getSum(num1:number,num2:number){
    let params:HttpParams = new HttpParams();
    params = params.set("num1",num1.toString()).set("num2",num2.toString());
    // return this.http.get(`http://127.0.0.1:3000/sum?num1=${num1}&num2=${num2}`);
    return this.http.get(`http://127.0.0.1:3000/sum`,{params});
  }
}
