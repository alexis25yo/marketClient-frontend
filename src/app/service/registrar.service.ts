import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {
  private apiUrl = environment.apiUrl;

  constructor(
    private http:HttpClient
  ) { }

  registrar(cliente:Cliente):Observable<any>{
    let url=`${this.apiUrl}/registrar`;
    return this.http.post(url,cliente);
  }
}
