import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToDoItemsComponent } from './to-do-items/to-do-items.component';
import { PipesTestComponent } from './pipes-test/pipes-test.component';
import { FormsModule } from '@angular/forms';
import {DataListComponent} from './data-list/data-list.component'
import { DataService } from './data.service';
import { LoggerService } from './logger.service';
import {HttpClientModule} from "@angular/common/http"
import { UserInfoComponent } from './user-info/user-info.component';
import { UserListComponent } from './user-list/user-list.component';
import { SumCalcComponent } from './sum-calc/sum-calc.component';

@NgModule({
  declarations: [	
    AppComponent,
    ToDoItemsComponent,
    PipesTestComponent,
    DataListComponent,
      UserInfoComponent,
      UserListComponent,
      SumCalcComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataService,LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
