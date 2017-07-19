import { Component, OnInit } from '@angular/core';
import { MdDialogRef, MdDialog } from "@angular/material";
import { MdGridListModule}  from '@angular/material';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  selectedDetail: any;
  constructor(public dialogRef: MdDialogRef<DialogComponent>) { }
doctorDetails = [
    {
        "Doctor": "Dr Ramesh Kumar"
    },
    {
        "Doctor": "Dr Veena Kumari"
    },
    {
        "Doctor": "Dr Rajesh Kumar"
    },
    {
        "Doctor": "Dr Purohit Kumar"
    },
    {
        "Doctor": "Dr shubham Kumar"
    }
];
  ngOnInit() {
    
  }
  onClose() {
        this.dialogRef.close();
    }

    onAuthorize() {
        this.dialogRef.close();
    }

}
