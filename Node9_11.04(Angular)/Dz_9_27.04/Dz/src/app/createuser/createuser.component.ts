import { Component, OnInit } from '@angular/core';
import { HtttpServiceService } from '../htttp-service.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css'],
  providers: [HtttpServiceService]
})
export class CreateuserComponent implements OnInit {
  user: User=new User("",0);
  done: boolean=false;
  constructor(private http: HtttpServiceService, private router: Router) { }

  ngOnInit() {
  }
  submit(){
    this.http.postUser(this.user).subscribe((data:any)=>{
      if(data!=null)
      {
        this.router.navigateByUrl("/users")
      }
    })

  }
  clear()
  {
    this.user=new User("",0);
  }
}
