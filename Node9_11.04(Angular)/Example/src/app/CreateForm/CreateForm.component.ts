import { Component, OnInit } from '@angular/core';
import { HtttpServiceService } from '../htttp-service.service';

@Component({
  selector: 'app-CreateForm',
  templateUrl: './CreateForm.component.html',
  styleUrls: ['./CreateForm.component.css'],
  providers: [HtttpServiceService]
})
export class CreateFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
