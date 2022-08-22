import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders   } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  apiUrl ='https://prueba-branch.000webhostapp.com/api/'

  constructor(private http: HttpClient) { }

  searchDeptos(data){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post(this.apiUrl,JSON.stringify(data),{headers:headers});
  }


  searchCitys(data){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post(this.apiUrl,JSON.stringify(data),{headers:headers});
  }


  saveRegistre(data){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post(this.apiUrl,JSON.stringify(data),{headers:headers});
  }

  cargarRegistros(data){
    var headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    return this.http.post(this.apiUrl,JSON.stringify(data),{headers:headers});
  }


}
