import { Component, Injectable, OnInit} from '@angular/core';
import { DataService } from '../data.service';
@Injectable()
@Component({
  selector: 'app-data-list',
  // providers:[DataService],
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit{
  data?:string[];
  name?:string;
  constructor(private service: DataService){

  }
  ngOnInit(): void {
    this.data = this.service.getData();
  }
  addItem(item?:string):void{
    if(item)
    this.service.addItem(item);
  }
}
