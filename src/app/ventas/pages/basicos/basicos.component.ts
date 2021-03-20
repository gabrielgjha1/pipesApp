import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {


  nombreLower:string = 'gabriel';
  nombreupper:string = 'GABRIEL';
  nombreCompleto:string = 'GabrIEl HernANdez';

  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
