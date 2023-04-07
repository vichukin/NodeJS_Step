import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-sum-calc',
  templateUrl: './sum-calc.component.html',
  styleUrls: ['./sum-calc.component.css']
})
export class SumCalcComponent {
  num1: number = 0;
  num2:number = 0;
  done:boolean=false;
  sum?:number;
  constructor(private http: HttpService){}
  add(){
    console.log(`${this.num1}+${this.num2}`);
    this.http.getSum(this.num1,this.num2).subscribe(
      { next: ((data:any)=>{
      this.sum=data.result;
      this.done=true;
    }),
    error: error=>console.log(error)

  });
}
}
