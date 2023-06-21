import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TipoComunicacion } from 'src/app/model/TipoComunicacion';
import { tcomunicacionService } from 'src/app/service/tcomunicacion.service';
import { MatDialog } from '@angular/material/dialog'
import { TcomunicacionDialogoComponent } from '../tcomunicacion-dialogo/tcomunicacion-dialogo.component';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-tcomunicacion-listar',
  templateUrl: './tcomunicacion-listar.component.html',
  styleUrls: ['./tcomunicacion-listar.component.css']
})

export class tcomunicacionListarComponent implements OnInit {

  lista: TipoComunicacion[] = []
  dataSource: MatTableDataSource<TipoComunicacion> = new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[] = ['codigo', 'nombre', 'descripcion', 'benefactor', 'emprendedor', 'acciones1','acciones2']

  constructor(private aS: tcomunicacionService, private dialog: MatDialog) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngOnInit(): void {
    this.aS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })

    this.aS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })

    this.aS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })

  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(TcomunicacionDialogoComponent);
  }
  eliminar(id: number) {
    this.aS.delete(id).subscribe(() => {
      this.aS.list().subscribe(data => {
        this.aS.setList(data);
      })
    })
  }
  filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}
