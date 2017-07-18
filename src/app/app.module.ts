import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule, MdDialogModule } from '@angular/material';
import { FormsModule } from "@angular/forms";
import { LayoutService } from "app/layout.service";
import { MenuService } from "app/menu.service";
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
    MaterialModule, 
    MdDialogModule,
    FormsModule,
     RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      }])
  ],
  providers: [MenuService, LayoutService],
  bootstrap: [AppComponent]
})
export class AppModule { }
