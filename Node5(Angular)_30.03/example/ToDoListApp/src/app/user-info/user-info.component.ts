import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user?: User;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.getUser().subscribe((data:any)=>{
      this.user=data;
    });
  }

}
