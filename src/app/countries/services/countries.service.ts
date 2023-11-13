import { Injectable } from '@angular/core';
import { Country, Region, SmallCountry } from '../interfaces/country.interfaces';
import { Observable, combineLatest, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private baseUrl:string = "https://restcountries.com/v3.1";

  private regionsArray: Region[] = [Region.Africa, Region.Americas, 
                                    Region.Asia, Region.Europe, Region.Oceania];

  constructor(private htpp:HttpClient) { }

  get regions():Region [] {
    // lo retornamos con el spread ..., dado que los valores se pasan por referencia para no afectar al original
    return [...this.regionsArray];
  }

  getCountriesByRegion(region: Region): Observable<SmallCountry[]> {
    if(!region) return of([]);

    const url: string = `${ this.baseUrl }/region/${ region }?fields=cca3,name,borders`;

    return this.htpp.get<Country[]>(url).pipe(
      map(countries => countries.map( country => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? []
      })) )
    );
  }


  getCountryByAlphaCode(alphaCode:string):Observable<SmallCountry> {
    const url: string = `${ this.baseUrl }/alpha/${ alphaCode }?fields=cca3,name,borders`;

    return this.htpp.get<Country>(url)
    .pipe(
      map( country => ({
        name: country.name.common,
        cca3: country.cca3,
        borders: country.borders ?? []
      }))
    );
  }

  getCountryBordersByCode(borders:string[]):Observable<SmallCountry[]> {
    if(!borders || borders.length ===0) return of([]);

    const countriesRequests: Observable<SmallCountry>[] = [];

    borders.forEach( code => {
      const request = this.getCountryByAlphaCode(code);
      countriesRequests.push(request);
    });

    // combineLatest Emite hasta que todos los observables emitan un valor
    return combineLatest(countriesRequests);
  }
}
