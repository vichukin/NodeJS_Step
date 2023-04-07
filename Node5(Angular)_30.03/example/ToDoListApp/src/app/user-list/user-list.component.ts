import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users?: User[];
  constructor(private http: HttpService){}
  ngOnInit(): void {
    // this.http.getUsers().subscribe((data:any)=>{
    //   this.users=data.userlist;
    // })
    this.http.getUserList().subscribe(data=>this.users=data);
  }
}
