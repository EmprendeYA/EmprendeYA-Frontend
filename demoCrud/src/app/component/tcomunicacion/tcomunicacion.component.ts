import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tcomunicacion',
  templateUrl: './tcomunicacion.component.html',
  styleUrls: ['./tcomunicacion.component.css']
})
export class TcomunicacionComponent implements OnInit {

  constructor(public route:ActivatedRoute) {}


  ngOnInit(): void {

  }

}
