import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmprendedorResenaDTO } from 'src/app/model/EmprendedorResenaDTO';
import { ResenaService } from 'src/app/service/resena.service';

@Component({
  selector: 'app-reporte05',
  templateUrl: './reporte05.component.html',
  styleUrls: ['./reporte05.component.css']
})
export class Reporte05Component  implements OnInit{
  emprendedorCounts: EmprendedorResenaDTO[] = [];
  dataSource: MatTableDataSource<EmprendedorResenaDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['emprendedor','cantidad']
  constructor( private eS:ResenaService){}
  ngOnInit(): void {
    this.eS.getCountResenaByEmprendedor().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })
  }
  getBookCountByAuthor(): void {
    this.eS.getCountResenaByEmprendedor()
      .subscribe((data: EmprendedorResenaDTO[]) => {
        this.emprendedorCounts = data;
      });
  }

}
