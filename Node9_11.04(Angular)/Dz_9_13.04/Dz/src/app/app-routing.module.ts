import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SocialComponent } from './social/social.component';
import { OfficeComponent } from './office/office.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreateFormComponent } from './CreateForm/CreateForm.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"",component: HomeComponent,title:"Home"},
  {path:"edit",component: EditUserComponent,title:"Edit User"},
  {path:"create",component: CreateFormComponent,title:"Create User"},
  {path:"about",component: AboutComponent, title:"About"},
  {path:"users",component: UsersComponent,title:"Users"},
  {path:"contacts",component: ContactsComponent, title:"Contacts",
children:[
  {path:"social",component: SocialComponent},
  {path:"office",component: OfficeComponent}
]},
  {path:"**",component: NotFoundComponent, title: "Error"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
