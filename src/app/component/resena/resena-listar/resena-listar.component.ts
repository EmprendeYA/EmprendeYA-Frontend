import { Component, OnInit, ViewChild } from '@angular/core';
import { ResenaService } from 'src/app/service/resena.service';
import { MatTableDataSource } from '@angular/material/table';
import { Resena } from 'src/app/model/resena';
import { MatDialog } from '@angular/material/dialog';
import { ResenaDialogoComponent } from '../resena-dialogo/resena-dialogo.component';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-resena-listar',
  templateUrl: './resena-listar.component.html',
  styleUrls: ['./resena-listar.component.css']
})
export class ResenaListarComponent implements OnInit {
  lista: Resena[] = []
  dataSource: MatTableDataSource<Resena> = new MatTableDataSource();
  idMayor: number = 0;
  displayPlayedColumns: string[] = ['Codigo', 'Descripcion','emprendedor','acciones1','acciones2'];

  constructor(private rS: ResenaService, private dialog: MatDialog) { }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.rS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.rS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.rS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(ResenaDialogoComponent);
  }
  eliminar(id: number) {
    this.rS.delete(id).subscribe(() => {
      this.rS.list().subscribe(data => {
        this.rS.setList(data);
      })
    })
  }
  filtrer(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }

}

