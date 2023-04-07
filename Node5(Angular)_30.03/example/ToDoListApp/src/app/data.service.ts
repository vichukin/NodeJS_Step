import { Injectable, Optional } from "@angular/core";
import { LoggerService } from "./logger.service";
@Injectable()
export class DataService{
  items: string[] =[];
  name?: string;
  constructor(@Optional() private logger: LoggerService){}
  getData():string[]{
    if(this.logger)
    this.logger.write("data was gat");
    return this.items;
  }
  addItem(name:string):void{
    if(this.logger)
    this.logger.write("item was added");
    this.items.push(name);
  }
}
