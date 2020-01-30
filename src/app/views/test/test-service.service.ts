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


  view_employee(data: any): Promise<any>
  {
      // data.test = 'siva';

      // $http.post(url, data, {
      //     headers : {
      //         'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
      //     }
      // });

      return new Promise((resolve, reject) => {
        this._httpClient.post(this.baseUrl+'api/view_particular_data' + '', 
        {
          'data':data
        },
        {
          headers : {
              'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
          }
        }
      )
              .subscribe((response: any) => {
                  resolve(response);
              }, reject);
      });
  }


}

