import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule, MdDialogModule } from '@angular/material';
import { FormsModule } from "@angular/forms";
import { LoginService } from "app/login/login.service";
import { TableComponent } from './table/table.component';
import { DetailService } from "app/detail.service";
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule, 
    MdDialogModule,
    FormsModule,
    NgxDatatableModule,
    BrowserAnimationsModule,
     RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
       {
        path: 'table',
        component: TableComponent
      }
    ])
  ],
  providers: [LoginService,DetailService],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
