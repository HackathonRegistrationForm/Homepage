import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatToolbarModule } from'@angular/material/toolbar';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomepageComponent } from './homepage/homepage.component';

import { QuestionpageComponent } from './questionpage/questionpage.component';
import { MatRadioModule} from '@angular/material/radio';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ImageComponent } from './image/image.component';
import { AdditemsComponent } from './additems/additems.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HomepageComponent,

    QuestionpageComponent,
     SignupComponent,
     LoginComponent,
     ProductComponent,
     HomeComponent,
     ImageComponent,
     AdditemsComponent,
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
