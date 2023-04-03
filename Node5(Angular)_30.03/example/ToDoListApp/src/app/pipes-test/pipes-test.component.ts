import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePL from "@angular/common/locales/pl"
registerLocaleData(localePL,"pl");

@Component({
  selector: 'app-pipes-test',
  templateUrl: './pipes-test.component.html',
  styleUrls: ['./pipes-test.component.css']
})
export class PipesTestComponent {
  pi: number = Math.PI;
 town: string = "The London is a capital of Great Britain";
 num:number = 23.3400;
}
