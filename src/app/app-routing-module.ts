
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewSubordinadosComponent } from './components/view-subordinados-component/view-subordinados-component';
import { ViewPefilComponent } from './components/view-pefil-component/view-pefil-component';
import { LoginComponent } from './components/login-component/login-component';
import { HomeComponent } from './components/home-component/home-component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ViewPefilComponent },
  { path: 'subordinates', component: ViewSubordinadosComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
