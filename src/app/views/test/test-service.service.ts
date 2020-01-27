import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  baseUrl = environment.apiUrl;

  constructor(
    private _httpClient: HttpClient,
  ) { }



  getAlbums() {
    // return this._httpClient.get('https://jsonplaceholder.typicode.com/albums');
    return this._httpClient.get(this.baseUrl+'api/get_employee_list');
  }

}

