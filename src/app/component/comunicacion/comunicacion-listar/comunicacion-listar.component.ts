import { Component, OnInit } from '@angular/core';
import { Comunicacion } from 'src/app/model/comunicacion';
import { MatTableDataSource } from '@angular/material/table'
import { ComunicacionService } from 'src/app/service/comunicacion.service';
import { MatDialog } from '@angular/material/dialog';
import { ComunicacionDialogoComponent } from '../comunicacion-dialogo/comunicacion-dialogo.component';

@Component({
  selector: 'app-comunicacion-listar',
  templateUrl: './comunicacion-listar.component.html',
  styleUrls: ['./comunicacion-listar.component.css']
})
export class ComunicacionListarComponent implements OnInit {
  lista: Comunicacion[] = []
  dataSource: MatTableDataSource<Comunicacion> = new MatTableDataSource()
  idMayor: number = 0;
  displayedColumns: string[] = ["codigo", "nombreTipoComunicacion", "descripcionTipoComunicacion",'acciones1','acciones2']
  constructor(private aS: ComunicacionService, private dialog:MatDialog) {

  }
  ngOnInit(): void {
    this.aS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })

    this.aS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.aS.getConfirmDelete().subscribe(data=>{
      data == true ? this.eliminar(this.idMayor) :false
    })
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(ComunicacionDialogoComponent);
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
