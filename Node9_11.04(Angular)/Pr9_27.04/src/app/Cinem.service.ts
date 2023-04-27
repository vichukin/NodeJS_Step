import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators"
import { Movie } from './Movie';
@Injectable({
  providedIn: 'root'
})
export class CinemService {

constructor(private Http: HttpClient) { }
GetCinema(title: string):Observable<Movie>
{
  return this.Http.get(`http://www.omdbapi.com/?i=tt3896198&apikey=b0bc5b34&t=${title}`).pipe(map((data:any)=>{
    return new Movie(data.Title,data.Year,data.Rated,data.Runtime,data.Actors,data.Poster);
  }));
}

}
