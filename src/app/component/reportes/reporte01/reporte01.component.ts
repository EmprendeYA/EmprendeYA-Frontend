import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmprendedorTDContenidoDTO } from 'src/app/model/EmprendedorTDContenidoDTO';
import { TipodeContenidoService } from 'src/app/service/TipodeContenido.service';
@Component({
  selector: 'app-reporte01',
  templateUrl: './reporte01.component.html',
  styleUrls: ['./reporte01.component.css']
})

  export class Reporte01Component implements OnInit {
    tdcontenidoCount: EmprendedorTDContenidoDTO[] = [];
    dataSource: MatTableDataSource<EmprendedorTDContenidoDTO> = new MatTableDataSource();

    displayedColumns: string[] = ['emprendedor','tdcontenidoCount']

    constructor(private bS: TipodeContenidoService) { }

    ngOnInit(): void {
      this.bS.getCountTipodeContenidoByEmprendedores().subscribe(data => {
        this.dataSource = new MatTableDataSource(data);
      })
    }

    getCountTipodeContenidoByEmprendedores(): void {
      this.bS.getCountTipodeContenidoByEmprendedores()
        .subscribe((data: EmprendedorTDContenidoDTO[]) => {
          this.tdcontenidoCount = data;
        });
    }
  }





