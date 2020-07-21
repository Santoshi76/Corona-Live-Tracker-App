import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TrackerServiceService {

  countriesUrl ='https://api.thevirustracker.com/free-api';

 // specifiCountryUrl = "https://api.thevirustracker.com/free-api"

  constructor(private http: HttpClient) { }

  getCountryList(){
    let params =new HttpParams().set('countryTotals','All'.toString());
    return this.http.get(this.countriesUrl,{params:params});
  }

  getDataByCountry(code){
    let params =new HttpParams().set('countryTotal',code.toString());
    return this.http.get(this.countriesUrl,{params:params});
  }
  getCountryTrend(code){
   let params =new HttpParams().set('countryTimeline',code.toString());
   return this.http.get(this.countriesUrl,{params:params});
  }
}