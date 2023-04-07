import { Component } from '@angular/core';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DataService, LoggerService],
  styleUrls: ['./app.component.css'],
  // template: "<h2>{{title}}</h2>"
})
export class AppComponent {
  title = 'Приложение для експорту листа';
}
