import { Component,OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { TipodeContenidoService } from 'src/app/service/TipodeContenido.service';

@Component({
  selector: 'app-TipodeContenido-dialogo',
  templateUrl: './TipodeContenido-dialogo.component.html',
  styleUrls: ['./TipodeContenido-dialogo.component.css']
})
export class TipodeContenidoDialogoComponent implements OnInit{
  constructor(private aS:TipodeContenidoService,private dialogoRef:MatDialogRef<TipodeContenidoDialogoComponent>){}
  ngOnInit(): void {}
  confirmar(estado: boolean){
    this.aS.setConfirmDelete(estado);
    this.dialogoRef.close();
  }
}
