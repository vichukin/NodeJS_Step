import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable} from "rxjs"
import {map} from "rxjs/operators"
import { Image } from './Image';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

constructor(private http: HttpClient) { }

GetImages():Observable<Image[]>{
  console.log("get images");
  return this.http.get("assets/images.json").pipe(map((data:any)=>{
    let Images = data["Images"];
    return Images.map((item:any)=>{
      return {Url: item.Url,Author:item.Author,Title:item.Title,Place:item.Place,Year:item.Year}
    });
  }));
}

}
