import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    loggedUser;
    constructor(
        private _http: HttpClient,
        private _router: Router
    ) {}

    getDoctorsInService() {
        console.log('getting all items in service');
        return this._http.get('/getAllDoctors');
    }
}
