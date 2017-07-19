import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule, MdDialogModule } from '@angular/material';
import { FormsModule } from "@angular/forms";
import { LayoutService } from "app/layout.service";
import { MenuService } from "app/menu.service";
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginService } from "app/login/login.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule, 
    MdDialogModule,
    FormsModule,
    BrowserAnimationsModule,
     RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ])
  ],
  providers: [MenuService, LayoutService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
