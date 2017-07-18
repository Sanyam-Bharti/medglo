import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule, MdDialogModule } from '@angular/material';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule, 
    MdDialogModule,
    ,FormsModule,
     RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
