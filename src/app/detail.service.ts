import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DetailService {

patientDetails = [
    {
        "Id": 1,
        "Test": "Blood",
        "Date": "03/05/2017",
        "Time": "10:30 am",
        "Doctor": "Dr Ramesh Kumar"
    },
    {
        "Id": 2,
        "Test": "Urine",
        "Date": "03/05/2017",
        "Time": "10:30 am",
        "Doctor": "Dr Veena Kumari"
    },
    {
        "Id": 3,
        "Test": "Plateleds",
        "Date": "03/05/2017",
        "Time": "10:30 am",
        "Doctor": "Dr Rajesh Kumar"
    },
    {
        "Id": 4,
        "Test": "CBC",
        "Date": "03/05/2017",
        "Time": "10:30 am",
        "Doctor": "Dr Purohit Kumar"
    },
    {
        "Id": 5,
        "Test": "Xray",
        "Date": "03/05/2017",
        "Time": "10:30 am",
        "Doctor": "Dr shubham Kumar"
    }
];


  constructor(private http: Http) { }

  getPatientDetails(): any {

    return this.patientDetails;
        // return this.http.get('doctorDetails.json') 
        //     .map((response: Response) => response.json());
    }

}
