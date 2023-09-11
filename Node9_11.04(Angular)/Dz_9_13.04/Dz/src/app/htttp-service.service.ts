import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"
import { User } from './user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HtttpServiceService {

constructor(private http: HttpClient) { }
 postUser(user: User)
 {
   return this.http.post("http://localhost:3000/users",user);
 }
 GetUser(Id:number){
  return this.http.get(`http://localhost:3000/users/${Id}` );
 }
 GetUsers(){
  return this.http.get("http://localhost:3000/users" );
 }
 deleteUser(user: User)
  {
    return this.http.delete(`http://localhost:3000/users/${user.id}` );
  }
  putUser(user:User)
  {
    return this.http.put(`http://localhost:3000/users/${user.id}`,user)
  }
}
