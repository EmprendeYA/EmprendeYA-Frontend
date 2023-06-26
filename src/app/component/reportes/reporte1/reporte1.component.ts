import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { emprendedorBenefactorDTO } from 'src/app/model/emprendedorBenefactorDTO';
import { EmprendedorService } from 'src/app/service/emprendedor.service';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.css']
})
export class Reporte1Component implements OnInit {
  emprendedorCounts: emprendedorBenefactorDTO[]=[];
  dataSource: MatTableDataSource<emprendedorBenefactorDTO>=new MatTableDataSource();

  displayedColumns: string[]=['benefactor','cantidad']

  constructor(private eS:EmprendedorService){}

  ngOnInit(): void {
    this.eS.getEmprendedorCountByBenefactor().subscribe(data => {
      this.dataSource=new MatTableDataSource(data);
      console.log(data);

    })
  }

  getEmprendedorCountByBenefactor():void{
    this.eS.getEmprendedorCountByBenefactor().subscribe ((data :emprendedorBenefactorDTO[]) =>
    {
      this.emprendedorCounts=data;
    })
  }
}
