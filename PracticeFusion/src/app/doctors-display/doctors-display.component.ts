import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
    selector: 'app-doctors-display',
    templateUrl: './doctors-display.component.html',
    styleUrls: ['./doctors-display.component.css']
})
export class DoctorsDisplayComponent {
    doctors;
    searchParams;
    cities;
    states;
    countries;
    specialities;
    reviews;
    currentSort;
    constructor(private _httpService: HttpService) {
        this.cities = ['None'];
        this.states = ['None'];
        this.countries = ['None'];
        this.specialities = ['None'];
        this.reviews = ['None'];
        this.currentSort = 'None';

        this.searchParams = {
            city: null,
            state: null,
            country: null,
            speciality: null,
            review: null
        };
        this.getDoctors();
    }

    getDoctors() {
        const observable = this._httpService.getDoctorsInService();
        observable.subscribe(data => {
            this.doctors = data['doctors'];
            this.getSearchParams();
        });
    }

    getSearchParams() {
        for (let i = 0; i < this.doctors.length; i++) {
            if (this.doctors[i].city && !this.cities.includes(this.doctors[i].city)) {
                this.cities.push(this.doctors[i].city);
            }
            if (this.doctors[i].state && !this.states.includes(this.doctors[i].state)) {
                this.states.push(this.doctors[i].state);
            }
            if (this.doctors[i].country && !this.countries.includes(this.doctors[i].country)) {
                this.countries.push(this.doctors[i].country);
            }
            if (this.doctors[i].speciality && !this.specialities.includes(this.doctors[i].speciality)) {
                this.specialities.push(this.doctors[i].speciality);
            }
        }
    }

    passFilter(doctor) {
        let pass = true;
        if (this.searchParams.city && this.searchParams.city !== 'None') {
            if (this.searchParams.city !== doctor.city) {
                pass = false;
            }
        }
        if (this.searchParams.state && this.searchParams.state !== 'None') {
            if (this.searchParams.state !== doctor.state) {
                pass = false;
            }
        }
        if (this.searchParams.country && this.searchParams.country !== 'None') {
            if (this.searchParams.country !== doctor.country) {
                pass = false;
            }
        }
        if (this.searchParams.speciality && this.searchParams.speciality !== 'None') {
            if (this.searchParams.speciality !== doctor.speciality) {
                pass = false;
            }
        }

        return pass;
    }

    sortAscending() {
        for (let i = 0; i < this.doctors.length - 1; i++) {
            for (let y = i + 1; y < this.doctors.length; y++) {
                if (this.doctors[i].review > this.doctors[y].review) {
                    const temp = this.doctors[i];
                    this.doctors[i] = this.doctors[y];
                    this.doctors[y] = temp;
                }
            }
        }
        console.log(this.doctors);
    }

    sortDescending() {
        for (let i = 0; i < this.doctors.length - 1; i++) {
            for (let y = i + 1; y < this.doctors.length; y++) {
                if (this.doctors[i].review < this.doctors[y].review) {
                    const temp = this.doctors[i];
                    this.doctors[i] = this.doctors[y];
                    this.doctors[y] = temp;
                }
            }
        }
    }

    sortID() {
        for (let i = 0; i < this.doctors.length - 1; i++) {
            for (let y = i + 1; y < this.doctors.length; y++) {
                if (this.doctors[i].id > this.doctors[y].id) {
                    const temp = this.doctors[i];
                    this.doctors[i] = this.doctors[y];
                    this.doctors[y] = temp;
                }
            }
        }
    }

}
