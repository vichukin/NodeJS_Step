import { Component, OnInit } from '@angular/core';
import { CinemService } from '../Cinem.service';
import { Movie } from '../Movie';

@Component({
  selector: 'app-CInema',
  templateUrl: './CInema.component.html',
  styleUrls: ['./CInema.component.css']
})
export class CInemaComponent implements OnInit {
  Movie!: Movie;
  title:string="";
  done:boolean = false;
  constructor(private http:CinemService) { }
  async Submit(){
    console.log(this.title);
    await this.http.GetCinema(this.title).subscribe(data=>this.Movie=data);
  }
  ngOnInit() {
  }

}
