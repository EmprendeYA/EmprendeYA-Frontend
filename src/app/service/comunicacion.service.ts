import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comunicacion } from '../model/comunicacion';
import { Subject } from 'rxjs';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class ComunicacionService {
  private url=`${base_url}/comunicaciones`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Comunicacion[]>()

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Comunicacion[]>(this.url);
  }
  insert(comunicacion: Comunicacion) {
    return this.http.post(this.url, comunicacion);
  }

  setList(listaNueva: Comunicacion[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Comunicacion>(`${this.url} / ${id}`);
  }
  update(aut: Comunicacion) {
    return this.http.put(this.url + "/" + aut.id, aut);

  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmDelete() {
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado: boolean) {
    this.confirmarEliminacion.next(estado);
  }
}
