import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Emprendedor } from 'src/app/model/emprendedor';
import { EmprendedorService } from 'src/app/service/emprendedor.service';

@Component({
  selector: 'app-reporte8',
  templateUrl: './reporte8.component.html',
  styleUrls: ['./reporte8.component.css']
})
export class Reporte8Component implements OnInit {
  getempren_edad: Emprendedor[] = [];
  dataSource: MatTableDataSource<Emprendedor> = new MatTableDataSource();

  displayedColumns: string[] = ['id','rubroEmprendedor','nombreEmprendedor','apellidoEmprendedor','edadEmprendedor']

  constructor(private eS: EmprendedorService) { }

  ngOnInit(): void {
    this.eS.getempren_edad().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getBookCountByAuthor(): void {
    this.eS.getempren_edad()
      .subscribe((data: Emprendedor[]) => {
        this.getempren_edad = data;
      });
  }
  }
