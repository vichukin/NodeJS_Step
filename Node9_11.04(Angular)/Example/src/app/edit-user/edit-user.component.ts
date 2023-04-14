import { trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HtttpServiceService } from '../htttp-service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  id: number=0;
  constructor(private route:ActivatedRoute,private router: Router,private http:HtttpServiceService)
  {
    this.route.queryParams.subscribe(params=>this.id=parseInt(params["id"]));
  }
  ngOnInit(): void {

  }
  gotoAbout(){
    this.router.navigateByUrl("/about");
  }
  submit(){}
  clear(){}
}
