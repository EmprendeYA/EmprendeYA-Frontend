import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Emprendedor } from 'src/app/model/emprendedor';
import { EmprendedorService } from 'src/app/service/emprendedor.service';
import { EmprendedorDialogoComponent } from '../emprendedor-dialogo/emprendedor-dialogo.component';

@Component({
  selector: 'app-emprendedor-listar',
  templateUrl: './emprendedor-listar.component.html',
  styleUrls: ['./emprendedor-listar.component.css']
})
export class EmprendedorListarComponent implements OnInit{

  lista:Emprendedor[]=[]
  dataSource: MatTableDataSource<Emprendedor>=new MatTableDataSource();
  idMayor: number = 0
  displayedColumns: string[]=['id','rubroEmprendedor','nombreEmprendedor','apellidoEmprendedor','edadEmprendedor','accion01','acciones2']
  constructor(private eS: EmprendedorService, private dialog: MatDialog){


  }
  ngOnInit(): void {
    this.eS.list().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })

    this.eS.getlist().subscribe(data=>{
      this.dataSource= new MatTableDataSource(data);
    })

    this.eS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(EmprendedorDialogoComponent);
  }
  eliminar(id: number) {
    this.eS.delete(id).subscribe(() => {
      this.eS.list().subscribe(data => {
        this.eS.setlist(data);
      })
    })
  }


filtrar(e:any){

  this.dataSource.filter=e.target.value.trim()
}



}
