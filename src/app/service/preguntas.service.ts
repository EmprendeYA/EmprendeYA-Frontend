import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Preguntas } from '../model/preguntas';
import { Subject } from 'rxjs';
const base_url = environment.base;
@Injectable({
  providedIn: 'root',
})
export class PreguntasService {
  private url = `${base_url}/preguntas`;
  private confirmarEliminacion=new Subject<Boolean>()
  private listaCambio=new Subject<Preguntas[]>()

  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<Preguntas[]>(this.url);
  }
  insert(preguntas: Preguntas) {
    return this.http.post(this.url, preguntas);
  }
  setList(ListaNueva: Preguntas[]) {
    this.listaCambio.next(ListaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Preguntas>(`${this.url}/${id}`);
  }
  update(pre: Preguntas){
    return this.http.put(this.url, pre);
  }
  delete(id:number){
    return this.http.delete(`${this.url}/${id}`)
  }
  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }
}
