import { Component, OnInit } from '@angular/core';
import { Article } from '../article';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  data: Article[] = [];
  SelectedArticle?: Article;
  constructor() { }

  ngOnInit() {
    let a1 = new Article(false,"The biggest car",`Two of the largest cars in the world are executive limousines. The beautiful Mercedes 600 Pullman was 6.2 metres long and weighed almost 3.3 tons. Behind the Iron Curtain, the Russian ZIL-41047 weighed 3.6 tons and was almost 6.4 metres long.`);
    let a2 = new Article(false,"The biggest plane", "Stratolaunch Roc - Measuring around 239 feet in length and 50 feet in height – the plane can carry a total payload of 500,000 pounds and requires a runway that's at least 12,000 feet long. ");
    let a3 = new Article(false, "The biggest ship","Seawise Giant - Originally smaller, jumboisation made Seawise Giant the largest ship ever by length, displacement (657,019 tonnes), and deadweight tonnage. ");
    this.data.push(a1,a2,a3);
  }
  CheckSelected():boolean{
    return this.data.some(t=>t.Selected);
  }
  Changebtn(str: string){
    // this.data.forEach(t=>{
    //   t.Selected=false;
    // })
    let buf = this.data.find(t=>t.Title==str);
    // buf!.Selected=true;
    this.SelectedArticle=buf;
  }
}
