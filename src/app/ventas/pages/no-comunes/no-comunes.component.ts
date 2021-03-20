import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent implements OnInit {

  nombre:string = 'Gabriel';
  genero:string = 'masculino';
  clientes:string[]= ['hola','hola2','hola3','hola4','hola5'];
  invitacionMapa = {

    'masculino':'invitarlo',
    'femenino':'invitarla',

  }

  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {

    this.primengConfig.ripple = true;
  }

}
