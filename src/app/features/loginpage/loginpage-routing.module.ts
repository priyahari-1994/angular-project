import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';

const routes: Routes = [{ path: '', component: LoginpageComponent },
{path:'homepage', component:HomepageComponent},
{path:'welcomepage',component:WelcomepageComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginpageRoutingModule { }
