import { Component,OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TipodeContenidoService } from 'src/app/service/TipodeContenido.service';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
const base_url = environment.base

@Component({
  selector: 'app-reporte02',
  templateUrl: './reporte02.component.html',
  styleUrls: ['./reporte02.component.css']
})

export class Reporte02Component implements OnInit {

  valorNumerico: number;
  private url = `${base_url}/TipodeContenido`;
  displayedColumns: string[] = ['contador']

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let token = sessionStorage.getItem("token");
    this.http.get<number>(`${this.url}/contar`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`).set('Content-Type', 'application/json')
    }).subscribe(
      (numero: number) => {
        this.valorNumerico = numero;
      },
      (error) => {
        console.log('Error al obtener el número de registros:', error);
      }
    );
  }
}




