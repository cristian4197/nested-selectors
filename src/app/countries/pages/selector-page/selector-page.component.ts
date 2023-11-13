import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';
import { Region, SmallCountry } from '../../interfaces/country.interfaces';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styles: [
  ]
})
export class SelectorPageComponent implements OnInit {

  public countriesByRegion: SmallCountry[] = [];

  public borders: SmallCountry[] = [];

  public myForm:FormGroup = this.fb.group({
    region: ['', [Validators.required]],
    country: ['', [Validators.required]],
    border: ['', [Validators.required]]
  });

  constructor(private fb:FormBuilder,
              private contriesService: CountriesService
              ) { }

  ngOnInit(): void {
    this.onRegionChanged();
    this.onCountryChaned();
  }
  
  get regions(): Region[] {
    return this.contriesService.regions;
  }

  onRegionChanged():void {
    this.myForm.get('region')!.valueChanges
    .pipe(
      tap(() => this.resetControlValue('country') ),
      tap(() => this.borders = [] ),
      switchMap(region => this.contriesService.getCountriesByRegion(region))
    )
    .subscribe(
      countries => {
        this.countriesByRegion = countries;
      }
    );
  }

  onCountryChaned():void {
    this.myForm.get('country')!.valueChanges
    .pipe(
      tap(() => this.resetControlValue('border') ),
      // Si el valor es mayor a cero continua
      filter( (value:string) => value.length>0),
      switchMap(alphacode => this.contriesService.getCountryByAlphaCode(alphacode)),
      switchMap(country => this.contriesService.getCountryBordersByCode(country.borders))
    )
    .subscribe(
      countries => {
        this.borders = countries;
        // this.countriesByRegion = countries;
      }
    );
  }

  resetControlValue(nameControl:string):void {
    this.myForm.get(nameControl)!.setValue('');
  }
}
