import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
    selector: 'app-doctor-profile',
    templateUrl: './doctor-profile.component.html',
    styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
    doctor;
    allDoctors;
    similarDoctors;
    constructor(
        private _httpService: HttpService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.doctor = {};
        this.similarDoctors = [];
    }

    ngOnInit() {
        this._route.params.subscribe((params: Params) => this.getDoctor({ id: params['id'] }));
    }

    getDoctor(id) {
        const observable = this._httpService.getDoctorInService(id);
        observable.subscribe(data => {
            this.doctor = data['doctor'];
            // if the doctor isn't found, redirect to page-not-found component.
            if (!this.doctor) {
                this._router.navigate(['/page-not-found']);
            }
            this.getRelatedDoctors();
        });
    }

    getRelatedDoctors() {
        this.similarDoctors = [];
        const observable = this._httpService.getDoctorsInService();
        observable.subscribe(data => {
            this.allDoctors = data['doctors'];
            for (let i = 0; i < this.allDoctors.length; i++) {
                // selects doctors based on similar city and spcialization. since there are only two factors to judge similarity;
                // high priority to the front, low priority to the back.
                if (this.allDoctors[i].id !== this.doctor.id) {
                    if (this.allDoctors[i].city === this.doctor.city && this.allDoctors[i].speciality === this.doctor.speciality) {
                        // add to front if higher priority
                        this.similarDoctors = this.addToFront(this.similarDoctors, this.allDoctors[i]);
                    } else if (this.allDoctors[i].city === this.doctor.city || this.allDoctors[i].speciality === this.doctor.speciality) {
                        // add to back if lower priority
                        this.similarDoctors.push(this.allDoctors[i]);
                    }
                }
            }
        });
    }

    // helper function to add item to the front of an array.
    addToFront(arr, item) {
        console.log(item, arr);
        return [item].concat(arr);
    }

}
