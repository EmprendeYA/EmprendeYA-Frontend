import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmprendedorTipoContDTO } from 'src/app/model/EmprendedorTipoContDTO';
import { TipodeContenido } from 'src/app/model/TipodeContenido';
import { TipodeContenidoService } from 'src/app/service/TipodeContenido.service';

@Component({
  selector: 'app-reporte9',
  templateUrl: './reporte9.component.html',
  styleUrls: ['./reporte9.component.css']
})
export class Reporte9Component implements OnInit {
  getempren_mayortcom: EmprendedorTipoContDTO[] = [];
  dataSource: MatTableDataSource<EmprendedorTipoContDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['ID','nombre_empren','apellido_empren','edad_empren','rubro_empren','benef_ID']

  constructor(private tS: TipodeContenidoService) { }

  ngOnInit(): void {
    this.tS.getempren_mayortc().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getBookCountByAuthor(): void {
    this.tS.getempren_mayortc()
      .subscribe((data: EmprendedorTipoContDTO[]) => {
        this.getempren_mayortcom = data;
      });
  }
  }

