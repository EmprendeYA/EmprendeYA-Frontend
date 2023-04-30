import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EmprendedorService } from 'src/app/service/emprendedor.service';

@Component({
  selector: 'app-emprendedor-dialogo',
  templateUrl: './emprendedor-dialogo.component.html',
  styleUrls: ['./emprendedor-dialogo.component.css']
})
export class EmprendedorDialogoComponent implements OnInit{
  constructor(private eS: EmprendedorService,
    private dialogRef: MatDialogRef<EmprendedorDialogoComponent>) { }

  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.eS.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}
