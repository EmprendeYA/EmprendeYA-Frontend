import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';
import { Subject } from 'rxjs';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = `${base_url}/users`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<User[]>()
  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<User[]>(this.url)
  }
  insert(user: User) {
    return this.http.post(this.url, user);
  }
  setList(ListaNueva: User[]) {
    this.listaCambio.next(ListaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<User>(`${this.url}/${id}`)
  }
  update(use: User) {
    return this.http.put(this.url + "/" + use.id, use)
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
