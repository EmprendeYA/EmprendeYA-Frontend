import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TipodeContenido } from '../model/TipodeContenido';
import { Observable, Subject } from 'rxjs';
import { EmprendedorTDContenidoDTO } from '../model/EmprendedorTDContenidoDTO';
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
    let token = sessionStorage.getItem("token");
    return this.http.get<TipodeContenido[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  insert(TipodeContenido: TipodeContenido) {
    let token = sessionStorage.getItem("token");
    return this.http.post(this.url, TipodeContenido, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setList(listaNueva: TipodeContenido[]) {
    this.listaCambio.next(listaNueva);
  }

  getList() {
    return this.listaCambio.asObservable();
  }

  listId(idTipodeContenido: number) {
    let token = sessionStorage.getItem("token");
    return this.http.get<TipodeContenido>(`${this.url}/${idTipodeContenido}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  update(aut: TipodeContenido) {
    let token = sessionStorage.getItem("token");
   return this.http.put(this.url, aut, {
    headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  delete(idTipodeContenido: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${idTipodeContenido}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }

  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }

  getCountTipodeContenidoByEmprendedores(): Observable<EmprendedorTDContenidoDTO[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<EmprendedorTDContenidoDTO[]>(`${this.url}/tdcontenido-count`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  // contarTipodeContenido() {
  //   let token = sessionStorage.getItem("token");
  //   return this.http.get<number>(this.url, {
  //     headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
  //   });
  // }
}

