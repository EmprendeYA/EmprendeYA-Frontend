import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resena } from '../model/resena';
import { HttpClient } from '@angular/common/http';
import { EmprendedorTipoContDTO } from '../model/EmprendedorTipoContDTO';

const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class ResenaService {
  private url = `${base_url}/resenas`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<Resena[]>()
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<Resena[]>(this.url)
  }
  insert(resena: Resena) {
    return this.http.post(this.url, resena);
  }
  setList(ListaNueva: Resena[]) {
    this.listaCambio.next(ListaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<Resena>(`${this.url}/${id}`)
  }
  update(res: Resena) {
    return this.http.put(this.url + "/" + res.id, res)
  }
  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
  getConfirmDelete() {
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado: Boolean) {
    this.confirmarEliminacion.next(estado);
  }
}
