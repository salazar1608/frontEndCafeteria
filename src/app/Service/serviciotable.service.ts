import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyTable } from '../Modelo/mytable';

@Injectable({
  providedIn: 'root'
})
export class ServiciotableService {

  constructor(private http: HttpClient) { }
  Url='https://pruebabackcafeteria-1.onrender.com/data/nombres';
  getTable(){
    return this.http.get<MyTable[]>(`${this.Url}`);
  }

 

  postTable(t:MyTable){
    return this.http.post(`${this.Url}`,t);
  }
}
