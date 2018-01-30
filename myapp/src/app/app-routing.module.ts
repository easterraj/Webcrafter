import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { AppComponent } from './app.component';
import { HomeComponent } from "./home/home.component";
import {RegisterComponent} from "./register/register.component"
import {NotfoundComponent} from "./notfound/notfound.component";


const appRoutes: Routes =[
  { path: '',   redirectTo:'home', pathMatch:'full'}, 
  {path:'home', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'**', component:NotfoundComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing:true})
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  declarations: []
})
export class AppRoutingModule { }
