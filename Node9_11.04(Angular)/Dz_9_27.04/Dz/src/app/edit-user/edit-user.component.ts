import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HtttpServiceService } from '../htttp-service.service';
import { User } from '../user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id: number=0;
  user: User = new User("", 0);
  constructor(private route: ActivatedRoute, private router: Router, private httpService: HtttpServiceService ){}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>this.id=parseInt(params["id"]));
    this.httpService.GetUser(this.id).subscribe((data:any)=>{
      this.user = data;
    });
  }
  putUser(user:User)
  {
    this.httpService.putUser(user).subscribe((data:any)=>{
      if(data.statusCode!="404")
        {
          this.router.navigateByUrl("/users");
        }
     })
  }
  gotoAbout(){
    this.router.navigateByUrl("/about");
  }
  submit(){}
  clear(){}
}
