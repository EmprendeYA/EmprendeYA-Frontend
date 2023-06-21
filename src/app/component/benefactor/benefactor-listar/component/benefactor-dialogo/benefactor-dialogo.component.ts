import { Component, OnInit } from '@angular/core';
import { BenefactorService } from 'src/app/service/benefactor.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-benefactor-dialogo',
  templateUrl: './benefactor-dialogo.component.html',
  styleUrls: ['./benefactor-dialogo.component.css']
})
export class BenefactorDialogoComponent implements OnInit {
  constructor(private aS: BenefactorService,
    private dialogRef: MatDialogRef<BenefactorDialogoComponent>) { }
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.aS.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}
