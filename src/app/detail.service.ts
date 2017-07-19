import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DetailService {

    private service_url = "http://localhost:3000/";
    constructor(private http: Http) { }

    getPatientDetails(): Observable<any[]> {
        return this.http.get(this.service_url + 'patientDetails')
            .map((response: Response) => response.json());
    }

    getDoctorDetails(): Observable<any[]> {
        return this.http.get(this.service_url + 'doctorDetails')
            .map((response: Response) => response.json());
    }

}
