import { Component, OnInit } from '@angular/core';
import { PreguntasService } from 'src/app/service/preguntas.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-preguntas-dialogo',
  templateUrl: './preguntas-dialogo.component.html',
  styleUrls: ['./preguntas-dialogo.component.css']
})
export class PreguntasDialogoComponent implements OnInit {
  constructor(private aS: PreguntasService,
    private dialogRef: MatDialogRef<PreguntasDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.aS.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}
