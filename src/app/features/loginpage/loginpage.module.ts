import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginpageRoutingModule } from './loginpage-routing.module';
import { LoginpageComponent } from './loginpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';


@NgModule({
  declarations: [
    LoginpageComponent,
    HomepageComponent,
    WelcomepageComponent
  ],
  imports: [
    CommonModule,
    LoginpageRoutingModule,
    FormsModule
  ]
})
export class LoginpageModule { }
