import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.component.html',
  styleUrls: ['./operaciones.component.css']
})
export class OperacionesComponent implements OnInit {

  valorPadre1: number;
  valorPadre2: number;
  resultado: number;

  constructor() { }

  ngOnInit() {
  }

  obtenerResultado(resultado: number): void {
    this.resultado = resultado;
  }

}
