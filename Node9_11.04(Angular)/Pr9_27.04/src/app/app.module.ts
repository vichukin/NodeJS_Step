import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CinemService} from './Cinem.service'
import { AppComponent } from './app.component';
import { CInemaComponent } from './CInema/CInema.component';
import { HttpClient, HttpHandler} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
      CInemaComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
