import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-user-dialogo',
  templateUrl: './user-dialogo.component.html',
  styleUrls: ['./user-dialogo.component.css']
})
export class UserDialogoComponent implements OnInit{
  constructor(private aS:UserService,private dialogoRef:MatDialogRef<UserDialogoComponent>){}
  ngOnInit(): void {}
    confirmar(estado: boolean){
      this.aS.setConfirmDelete(estado);
      this.dialogoRef.close();
    }


}
