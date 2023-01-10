import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomepageComponent } from './homepage/homepage.component';
import { QuestionpageComponent } from './questionpage/questionpage.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { AdditemsComponent } from './additems/additems.component';



const routes: Routes = [
  {path:'aboutus',component:AboutusComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'questionpage',component:QuestionpageComponent},
  {path: 'signup',component:SignupComponent},
  {path: 'login',component:LoginComponent},
  {path: 'product', component:ProductComponent},
  {path: 'home',component:HomeComponent},
  {path: 'image',component:ImageComponent},
  {path: 'additems',component:AdditemsComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

