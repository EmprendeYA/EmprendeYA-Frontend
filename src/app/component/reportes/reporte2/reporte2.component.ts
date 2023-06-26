import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { emprendedorPreguntaDTO } from 'src/app/model/emprendedorPreguntaDTO';
import { PreguntasService } from 'src/app/service/preguntas.service';

@Component({
  selector: 'app-reporte2',
  templateUrl: './reporte2.component.html',
  styleUrls: ['./reporte2.component.css']
})
export class Reporte2Component implements OnInit {
  preguntaCounts: emprendedorPreguntaDTO[]=[];
  dataSource: MatTableDataSource<emprendedorPreguntaDTO>=new MatTableDataSource();

  displayedColumns: string[]=['emprendedor','cantidadPre']

  constructor(private pS:PreguntasService){}

  ngOnInit(): void {
    this.pS.getPreguntaCountByEmprendedor().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
      console.log(data);

    })
  }

  getPreguntaCountByEmprendedor():void{
    this.pS.getPreguntaCountByEmprendedor().subscribe ((data :emprendedorPreguntaDTO[]) =>
    {
      this.preguntaCounts=data;
    })
  }
}
