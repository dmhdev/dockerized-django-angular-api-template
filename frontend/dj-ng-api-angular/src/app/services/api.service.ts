import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<any>{
    return this.http.get(this.baseURL + '/items/',
    {headers: this.httpHeaders});
  }
  getOneItem(id): Observable<any>{
    return this.http.get(this.baseURL + '/items/' + id + '/',
    {headers: this.httpHeaders});
  }
  updateItem(item): Observable<any>{
    const body = {name:item.name, desc:item.desc, price:item.price};

    return this.http.put(this.baseURL + '/items/' + item.id + '/', body,
    {headers: this.httpHeaders});
  }
  createItem(item): Observable<any>{
    const body = {name:item.name, desc:item.desc, price:item.price};

    return this.http.post(this.baseURL + '/items/', body,
    {headers: this.httpHeaders});
  }
  deleteItem(id): Observable<any>{
    return this.http.delete(this.baseURL + '/items/' + id + '/',
    {headers: this.httpHeaders});
  }
}
