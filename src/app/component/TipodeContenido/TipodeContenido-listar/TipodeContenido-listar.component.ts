import { Component, OnInit } from '@angular/core';
import { TipodeContenido } from 'src/app/model/TipodeContenido';
import { MatTableDataSource } from '@angular/material/table'
import { TipodeContenidoService } from 'src/app/service/TipodeContenido.service';
import { MatDialog } from '@angular/material/dialog';
import { TipodeContenidoDialogoComponent } from '../TipodeContenido-dialogo/TipodeContenido-dialogo.component';
import {MatPaginator} from '@angular/material/paginator';
import {AfterViewInit, ViewChild} from '@angular/core';
import { MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-TipodeContenido-listar',
  templateUrl: './TipodeContenido-listar.component.html',
  styleUrls: ['./TipodeContenido-listar.component.css']
})
export class TipodeContenidoListarComponent implements OnInit {
  lista: TipodeContenido[] = []
  dataSource: MatTableDataSource<TipodeContenido> = new MatTableDataSource()
  idMayor: number = 0;
  displayedColumns: string[] = ["codigo", "nombreTipodeContenido", "descripcionTipodeContenido",'emprendedor','acciones1','acciones2']
  constructor(private aS: TipodeContenidoService, private dialog:MatDialog) {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit(): void {
    if(this.paginator){
      this.dataSource.paginator = this.paginator;
      this.dataSource.paginator.length = this.lista.length;
    }
  }

  ngOnInit(): void {
    this.aS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.lista = data;
      this.dataSource.paginator = this.paginator;
      this.dataSource.paginator.length = this.lista.length;
    })

    this.aS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.lista = data;
    })
    this.aS.getConfirmDelete().subscribe(data=>{
      data == true ? this.eliminar(this.idMayor) :false
    })
  }
  confirm(idTipodeContenido: number) {
    this.idMayor = idTipodeContenido;
    this.dialog.open(TipodeContenidoDialogoComponent);
  }
  eliminar(idTipodeContenido: number) {
    this.aS.delete(idTipodeContenido).subscribe(() => {
      this.aS.list().subscribe(data => {
        this.aS.setList(data);
      })
    })
  }
  filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
