import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoService {

constructor() { }
 GetSkills():string[]{
  return ["C#","JavaScript","HTML","CSS","SQL","ASP.NET","Basic hardware knowledge","Cisco Certificate"];
 }
 GetLinks():string[]{
  return ["https://github.com/vichukin","https://www.linkedin.com/in/дима-вычкин-038175271/"];
 }
 GetExpWork():number{
  return 0;
 }
 GetExpStudy():number{
  return 1.5;
 }
}
