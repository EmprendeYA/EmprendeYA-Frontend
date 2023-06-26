import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Emprendedor } from '../model/emprendedor';
import { Subject, Observable } from 'rxjs';
import { emprendedorBenefactorDTO } from '../model/emprendedorBenefactorDTO';
import { EmprendedorEdadBenefactorDTO } from '../model/EmprendedorEdadBenefactorDTO';
const base_url=environment.base
@Injectable({
  providedIn: 'root'
})
export class EmprendedorService {
private url=`${base_url}/emprendedor`
private confirmarEliminacion = new Subject<Boolean>()
private listaCambio=new Subject<Emprendedor[]>()

  constructor(private http:HttpClient) { }
  list(){
    let token = sessionStorage.getItem("token");
    return this.http.get<Emprendedor[]>(this.url, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

insert(emprendedor: Emprendedor){
  let token = sessionStorage.getItem("token");
    return this.http.post(this.url, emprendedor, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  setlist(listaNueva: Emprendedor[]){
    this.listaCambio.next(listaNueva);
  }

  getlist(){
    return this.listaCambio.asObservable();
  }
  listId(id:number){
    let token = sessionStorage.getItem("token");
    return this.http.get<Emprendedor>(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }
  update(emp: Emprendedor){
    let token = sessionStorage.getItem("token");
    return this.http.put(this.url, emp, {
     headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
   });
  }

  delete(id: number) {
    let token = sessionStorage.getItem("token");
    return this.http.delete(`${this.url}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getConfirmDelete(){
    return this.confirmarEliminacion.asObservable();
  }
  setConfirmDelete(estado:Boolean){
    this.confirmarEliminacion.next(estado);
  }

  getEmprendedorCountByBenefactor(): Observable<emprendedorBenefactorDTO[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<emprendedorBenefactorDTO[]>(`${this.url}/emprendedor-count`,
    {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getEmpreByAgeAndBenefactor(){
    let token = sessionStorage.getItem("token");
    return this.http.get<EmprendedorEdadBenefactorDTO[]>(`${this.url}/emprendedores-count`,
    {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')});
  }

  getempren_edad(): Observable<Emprendedor[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<Emprendedor[]>(`${this.url}/empren_tc`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
  }

  getEmprendedorCountByRubro():Observable<Emprendedor[]> {
    let token = sessionStorage.getItem("token");
    return this.http.get<Emprendedor[]>(`${this.url}/empren_tc`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    });
}



}
