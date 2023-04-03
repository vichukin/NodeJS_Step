import { Component } from '@angular/core';
import { ToDoItem } from '../todoitems';
import {ITEMS} from '../to-do-items/mock-to-do-items'

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})
export class ToDoItemsComponent {
  toDoItem: ToDoItem={
    id:2,
    name:"Homework",
    isFinished: false
  };
  googleClasses?= {
    redFont:  true,
    redBlue:  false
  };
  lblStyles = {
    color: "magenta",
    "background-color": "skyblue",
    "font-style": "italic"
  }
  homePageURL:string = "https://ru.pathofexile.com/crucible";
  itemsList: ToDoItem[] = ITEMS;
  blueFont:boolean=false;

  days: string[]=["Понедельник","Вторник","Среда","Четверг"]

}
