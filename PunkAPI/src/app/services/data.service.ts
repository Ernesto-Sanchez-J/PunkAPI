import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http/';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private apiService: ApiService) { }

  async getBeers(){
    return await this.apiService.getAll();
  }
  async getBeersCount(count){
    return await this.apiService.getCount('?per_page=' + count);
  }
}
