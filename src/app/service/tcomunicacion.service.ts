import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TipoComunicacion } from '../model/TipoComunicacion';
import { Subject } from 'rxjs';
const base_url = environment.base
@Injectable({
  providedIn: 'root'
})
export class tcomunicacionService {
  private url = `${base_url}/TipodeComunicacion`
  private confirmarEliminacion = new Subject<Boolean>()
  private listaCambio = new Subject<TipoComunicacion[]>()

  constructor(private http: HttpClient) { }
  list() {
    return this.http.get<TipoComunicacion[]>(this.url);
  }
  insert(tcomunicacion: TipoComunicacion) {
    return this.http.post(this.url, tcomunicacion);
  }

  setList(listaNueva: TipoComunicacion[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id: number) {
    return this.http.get<TipoComunicacion>(`${this.url}/${id}`);
  }
  update(aut: TipoComunicacion) {
    return this.http.put(this.url + "/" + aut.id, aut);
  }
  //http- HttpClientModule: get-post-put-delete, hacer un cuadro comparativo

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }
}

