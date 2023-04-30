import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { MatTableDataSource } from '@angular/material/table'
import { UserService } from 'src/app/service/user.service';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogoComponent } from '../user-dialogo/user-dialogo.component';


@Component({
  selector: 'app-user-listar',
  templateUrl: './user-listar.component.html',
  styleUrls: ['./user-listar.component.css']
})
export class UserListarComponent implements OnInit {

  lista: User[] = []
  dataSource: MatTableDataSource<User> = new MatTableDataSource();
  idMayor: number = 0;
  displayedColumns: string[] = ['codigo', 'tipo', 'correo', 'contraseña', 'telefono', 'CuentaFB', 'CuentaGMAIL', 'acciones1', 'acciones2']

  constructor(private aS: UserService, private dialog:MatDialog) {

  }
  ngOnInit(): void {
    this.aS.list().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.aS.getList().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
    this.aS.getConfirmDelete().subscribe(data => {
      data == true ? this.eliminar(this.idMayor) : false;
    })
  }
  confirm(id: number) {
    this.idMayor = id;
    this.dialog.open(UserDialogoComponent);
  }
  eliminar(id: number) {
    this.aS.delete(id).subscribe(() => {
      this.aS.list().subscribe(data => {
        this.aS.setList(data);
      })
    })
  }
  filter(e: any) {
    this.dataSource.filter = e.target.value.trim();
  }
}
