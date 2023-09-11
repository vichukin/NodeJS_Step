import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { SocialComponent } from './social/social.component';
import { OfficeComponent } from './office/office.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule } from '@angular/forms';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreateFormComponent } from './CreateForm/CreateForm.component';
import { HtttpServiceService } from './htttp-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [	
    AppComponent,
    AboutComponent,
    NotFoundComponent,
    ContactsComponent,
    HomeComponent,
    SocialComponent,
    OfficeComponent,
    EditUserComponent,
    CreateuserComponent,
    CreateFormComponent,
      UsersComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
