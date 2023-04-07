import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpirienceComponent } from './expirience/expirience.component';
import { SkillsComponent } from './skills/skills.component';
import { LinksComponent } from './links/links.component';

@NgModule({
  declarations: [
    AppComponent,
      ExpirienceComponent,
      SkillsComponent,
      LinksComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
