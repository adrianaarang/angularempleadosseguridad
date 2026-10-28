import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { LoginComponent } from './components/login-component/login-component';
import { ViewPefilComponent } from './components/view-pefil-component/view-pefil-component';
import { ViewSubordinadosComponent } from './components/view-subordinados-component/view-subordinados-component';

@NgModule({
  declarations: [
    App,
    LoginComponent,
    ViewPefilComponent,
    ViewSubordinadosComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
