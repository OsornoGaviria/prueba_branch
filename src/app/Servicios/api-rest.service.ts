import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders   } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  apiUrl='https://sigma-studios.s3-us-west-2.amazonaws.com/test/colombia.json';

  constructor(private http: HttpClient) { }

  searcDeptos(){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.get(this.apiUrl)
  }
}
