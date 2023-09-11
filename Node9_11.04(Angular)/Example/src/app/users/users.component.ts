import { Component, OnInit } from '@angular/core';
import { HtttpServiceService } from '../htttp-service.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 users?: User[];
  constructor(private http: HtttpServiceService,private router: Router) { }

  ngOnInit() {
    this.http.GetUsers().subscribe((data:any)=>{
      this.users=data;
    })
  }
  deleteUser(user:User){
     this.http.deleteUser(user).subscribe((data:any)=>{
      if(data.message==="success")
        {
          let deleteduser = this.users?.findIndex(elem=>elem.id===data.id);
          this.users?.splice(deleteduser!,1);
          // console.log(this.users);
        }
     })
  }

  gotoEdit(Id:number){
    this.router.navigateByUrl(`/edit?id=${Id}`)
  }

}
