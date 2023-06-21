import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TipodeContenido } from '../model/TipodeContenido';
import { Subject } from 'rxjs';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class TipodeContenidoService {
  private url = `${base_url}/TipodeContenido`;
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<TipodeContenido[]>()

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<TipodeContenido[]>(this.url);
  }
  insert(TipodeContenido: TipodeContenido) {
    return this.http.post(this.url, TipodeContenido);
  }

  setList(listaNueva: TipodeContenido[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(idTipodeContenido: number) {
    return this.http.get<TipodeContenido>(`${this.url}/${idTipodeContenido}`);
  }
  update(aut: TipodeContenido) {
    return this.http.put(this.url, aut);
  }

  delete(idTipodeContenido: number) {
    return this.http.delete(`${this.url}/${idTipodeContenido}`)
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }
}

