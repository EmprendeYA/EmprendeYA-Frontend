import { Component,   OnInit } from '@angular/core';
import { tcomunicacionService } from 'src/app/service/tcomunicacion.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tcomunicacion-dialogo',
  templateUrl: './tcomunicacion-dialogo.component.html',
  styleUrls: ['./tcomunicacion-dialogo.component.css']
})
export class TcomunicacionDialogoComponent implements OnInit {
  constructor(private aS: tcomunicacionService,
    private dialogRef: MatDialogRef<TcomunicacionDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.aS.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}
