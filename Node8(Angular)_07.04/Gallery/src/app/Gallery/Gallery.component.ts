import { Component, OnInit } from '@angular/core';
import { Image } from '../Image';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-Gallery',
  templateUrl: './Gallery.component.html',
  styleUrls: ['./Gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images:Image[] = [];
  constructor( private httpService: HttpService) { }

  ngOnInit() {
    console.log("oninit")
    this.httpService.GetImages().subscribe(data=>this.images=data);
    setTimeout(()=>console.log(this.images),1000)
  }

}
