import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { DetailService } from "app/detail.service";
import { MdDialog } from "@angular/material";
import { DialogComponent } from "app/dialog/dialog.component";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // @Input() rows: Array<Object>;
  rows: Array<Object>;
  constructor(private patientService: DetailService,vcRef: ViewContainerRef, public dialog: MdDialog) { }

  ngOnInit() {
    this.rows = this.patientService.getPatientDetails();
    // this.patientService.getPatientDetails().subscribe(result => {
    //             this.rows = result;
    //         })

  }
  openDialog(detail) {
    let dialogRef = this.dialog.open(DialogComponent);
    dialogRef.componentInstance.selectedDetail = detail;
    //dialogRef.componentInstance.onClick();
  }

}
