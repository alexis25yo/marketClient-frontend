import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environmentCategorias } from '../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProcesarPedidoService {
  private apiUrl = environmentCategorias.apiUrl;

  constructor(private http:HttpClient) { }

  categorias():Observable<any>{
    let url = `${this.apiUrl}/categorias`;
    return this.http.get(url)
  }

  productosCategorias(idCategoria:number):Observable<any>{
    let url = `${this.apiUrl}/productos`;
    let params = new HttpParams();
    params = params.append("idCategoria", idCategoria)
    return this.http.get(url,{"params":params})
  }
}
