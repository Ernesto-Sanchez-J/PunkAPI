import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { IBeer } from '../interfaces/ibeer';
import { getNumberOfCurrencyDigits } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BeersURL = 'https://api.punkapi.com/v2/beers';
  constructor(private httpClient: HttpClient) { }
}

  async getAll(){
    return await this.httpClient.get<IBeer[]>(this.BeersURL).toPromise();
  }
  async getCount(path){
    return await this.httpClient.get<IBeer[]>(this.BeersURL + path).toPromise();
  }
}
