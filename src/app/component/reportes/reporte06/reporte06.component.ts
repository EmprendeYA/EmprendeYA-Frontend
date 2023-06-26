import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmprendedorEdadBenefactorDTO } from 'src/app/model/EmprendedorEdadBenefactorDTO';
import { EmprendedorService } from 'src/app/service/emprendedor.service';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort} from '@angular/material/sort';
@Component({
  selector: 'app-reporte06',
  templateUrl: './reporte06.component.html',
  styleUrls: ['./reporte06.component.css']
})
export class Reporte06Component implements OnInit {
  emprendedorCounts: EmprendedorEdadBenefactorDTO[] = [];
  dataSource: MatTableDataSource<EmprendedorEdadBenefactorDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['benefactor', 'emprendedor', 'apellido', 'edad'];

  constructor(private eS: EmprendedorService) {}
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.eS.getEmpreByAgeAndBenefactor().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
  }

  getEmpreByAgeAndBenefactor(): void {
    this.eS.getEmpreByAgeAndBenefactor().subscribe((data: EmprendedorEdadBenefactorDTO[]) => {
      this.emprendedorCounts = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
}
