import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resena } from '../model/resena';
import { HttpClient,HttpHeaders } from '@angular/common/http';

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
    let token = sessionStorage.getItem("token");
    return this.http.get<Resena[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(resena: Resena) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, resena, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(ListaNueva: Resena[]) {
    this.listaCambio.next(ListaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  listId(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<Resena>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(res: Resena) {
    let token = sessionStorage.getItem("token");
   return this.http.put(this.url, res, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  delete(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getConfirmDelete() {
    return this.confirmarEliminacion.asObservable();
  }

  setConfirmDelete(estado: Boolean) {
    this.confirmarEliminacion.next(estado);
  }

}
