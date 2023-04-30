import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-user-crearedita',
  templateUrl: './user-crearedita.component.html',
  styleUrls: ['./user-crearedita.component.css']
})
export class UserCreareditaComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  user: User = new User();
  mensaje: string = "";
  maxFecha: Date = moment().add(-1, "days").toDate();
  id: number = 0;
  edicion: boolean = false;
  constructor(private aS: UserService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
      this.init();
    })
    this.form = new FormGroup({
      id: new FormControl(),
      tipo: new FormControl(),
      correo: new FormControl(),
      contrasena: new FormControl(),
      NumTelefono: new FormControl(),
      CuentaFB: new FormControl(),
      CuentaGMAIL: new FormControl()
    });
  }
  aceptar(): void {
    this.user.id = this.form.value['id'];
    this.user.tipo = this.form.value['tipo'];
    this.user.correo = this.form.value['correo'];
    this.user.contrasena = this.form.value['contrasena'];
    this.user.NumTelefono = this.form.value['NumTelefono'];
    this.user.CuentaFB = this.form.value['CuentaFB'];
    this.user.CuentaGMAIL = this.form.value['CuentaGMAIL'];
    if (this.form.value['tipo'].length > 0 && this.form.value['correo'].length > 0) {

      if (this.edicion) {
        this.aS.update(this.user).subscribe(() => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      }
      else {
        this.aS.insert(this.user).subscribe(data => {
          this.aS.list().subscribe(data => {
            this.aS.setList(data);
          })
        })
      }
      this.router.navigate(['users'])
    } else {
      this.mensaje = "Complete los campos requeridos!!!";
    }
  }
  init() {
    this.aS.listId(this.id).subscribe(data => {
      this.form = new FormGroup({
        id: new FormControl(data.id),
        tipo: new FormControl(data.tipo),
        correo: new FormControl(data.correo),
        contrasena: new FormControl(data.contrasena),
        NumTelefono: new FormControl(data.NumTelefono),
        CuentaFB: new FormControl(data.CuentaFB),
        CuentaGMAIL: new FormControl(data.CuentaGMAIL)
      })
    })
  }

}

