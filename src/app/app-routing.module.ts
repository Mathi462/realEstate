import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostHomeComponent } from './post-home/post-home.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewHomeListComponent } from './view-home-list/view-home-list.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent
  },
  {    
    path:'login',
    component:LoginComponent
  },
  {    
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'post-home',
    component:PostHomeComponent
  },
  {
    path:'profile',
    component:ProfileComponent
  },
  {
    path:'view-home-list',
    component:ViewHomeListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
