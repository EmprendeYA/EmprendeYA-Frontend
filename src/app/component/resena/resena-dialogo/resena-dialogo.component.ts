import { Component, OnInit } from '@angular/core';
import { ResenaService } from 'src/app/service/resena.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-resena-dialogo',
  templateUrl: './resena-dialogo.component.html',
  styleUrls: ['./resena-dialogo.component.css']
})
export class ResenaDialogoComponent implements OnInit{
  constructor(private rS:ResenaService,private dialogoRef:MatDialogRef<ResenaDialogoComponent>){}
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.rS.setConfirmDelete(estado);
      this.dialogoRef.close();
    }


}
