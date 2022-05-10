import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './modelo/Produto';

@Injectable({
  providedIn: 'root'
})
export class RequisicaoService {

  // Construtor
  constructor(private http:HttpClient) { }

  // Cadastrar 
  cadastrar(obj:Produto):Observable<Produto> {
    return this.http.post<Produto>('http://localhost:3000/produtos', obj);
  }
  
  // Selecionar
  selecionar():Observable<Produto []> {
    return this.http.get<Produto[]>('http://localhost:3000/produtos')
  }

}
