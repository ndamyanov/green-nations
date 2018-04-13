import { Injectable } from '@angular/core';

import { UserService } from './user-service';
import { Country } from '../view-models/country';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppDataService {
    countries: Array<Country> = [
        { id: 1, name: 'Switzerland', epiIndex: 87.67 },
        { id: 2, name: 'Luxemburg', epiIndex: 83.29 },
        { id: 3, name: 'Australia', epiIndex: 82.4 },
        { id: 5, name: 'Singapore', epiIndex: 81.78 },
    ];

    constructor(private userService: UserService) {
    }

    createCountry(vm: Country): Observable<any> {
        let id = 0;
        this.countries.forEach(c => { if (c.id >= id) id = c.id + 1 });
        vm.id = id;
        this.countries.push(vm);
        return Observable.of(vm);
    }

    deleteCountry(id: number) : Observable<any> {
        return Observable.of({}).delay(2000)
        .do(e => this.countries.splice(this.countries.findIndex(c => c.id == id), 1));
    }

    getCountries(): Observable<any> {
        return Observable.of(this.countries);
    }

    getCountry(id: number): Observable<Country> {
        var country = this.countries.find(c => c.id == id);
        return Observable.of(country);
    }

    updateCountry(updatedCountry: Country) : Observable<any> {
        //TODO 
        return Observable.of(this.countries)
    }
}
