import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emprendedor',
  templateUrl: './emprendedor.component.html',
  styleUrls: ['./emprendedor.component.css']
})
export class EmprendedorComponent implements OnInit{
  constructor(public route:ActivatedRoute){

  }
  ngOnInit(): void {

  }

}
