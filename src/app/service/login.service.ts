import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = environment.apiUrl;

  constructor(
   private http:HttpClient
  ) { }

  login(usuario: string, password:string):Observable<any>{
    let url = `${this.apiUrl}/autenticar`;
    let params=new HttpParams();
    params=params.append("usuario", usuario);
    params=params.append("password", password);
    return this.http.get(url,{params:params});
  }
}
