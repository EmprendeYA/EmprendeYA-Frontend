import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-TipodeContenido',
  templateUrl: './TipodeContenido.component.html',
  styleUrls: ['./TipodeContenido.component.css']
})
export class TipodeContenidoComponent implements OnInit{
  constructor(public router:ActivatedRoute){

  }
  ngOnInit(): void {

  }
}
