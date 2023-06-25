import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-benefactor',
  templateUrl: './benefactor.component.html',
  styleUrls: ['./benefactor.component.css']
})
export class BenefactorComponent implements OnInit{

  constructor(public route: ActivatedRoute){

  }
ngOnInit():void {

}
}
