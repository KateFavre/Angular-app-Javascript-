import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//one method within the service that accepts a two-letter country code as an input parameter that 
//returns additional information gathered from the API for the selected country
export class CountryLookupService {

  constructor(private http:HttpClient) { }

  getCountryData(CountryCode: String): Observable<any>{

    //return dynamic api call here 
    return this.http.get('https://api.worldbank.org/v2/country/'
      + CountryCode + "?format=json")
  }
}
