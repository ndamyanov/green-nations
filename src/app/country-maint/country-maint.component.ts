import { Component, OnInit } from '@angular/core';
import { CountryListComponent } from '../country-list/country-list.component';
import { AppDataService } from '../services/app-data.service';
import { Router } from '@angular/router';
import { Country } from '../view-models/country';

@Component({
  selector: 'app-country-maint',
  templateUrl: './country-maint.component.html',
  styleUrls: ['./country-maint.component.css']
})
export class CountryMaintComponent implements OnInit {

  countries: Array<Country>;
  deleteError: string;
  deleteId: number;
  isDeleting = false;

  constructor(private dataService: AppDataService, private router: Router) {
    dataService.getCountries().subscribe((data)=> this.countries = data);
   }

  ngOnInit() {
  }

  createCountry() {
    this.router.navigate(['/authenticated/country-detail',0,'create'])
  }

  cancelDelete() {
    this.isDeleting = false;
    this.deleteId = null;
  }

  deleteCountryQuestion(id: number) {
    this.deleteError = null;
    this.deleteId = id;
  }

  editCountry(id: number) {
    this.router.navigate(['/authenticated/country-detail',id,'edit'])
  }

  showCountryDetail(id: number) {
    this.router.navigate(['/authenticated/country-detail',id,'details'])
  }

}
