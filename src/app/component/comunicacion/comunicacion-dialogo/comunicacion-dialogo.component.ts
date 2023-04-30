import { Component,OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ComunicacionService } from 'src/app/service/comunicacion.service';

@Component({
  selector: 'app-comunicacion-dialogo',
  templateUrl: './comunicacion-dialogo.component.html',
  styleUrls: ['./comunicacion-dialogo.component.css']
})
export class ComunicacionDialogoComponent implements OnInit{
  constructor(private aS:ComunicacionService,private dialogoRef:MatDialogRef<ComunicacionDialogoComponent>){}
  ngOnInit(): void {}
  confirmar(estado: boolean){
    this.aS.setConfirmDelete(estado);
    this.dialogoRef.close();
  }
}
