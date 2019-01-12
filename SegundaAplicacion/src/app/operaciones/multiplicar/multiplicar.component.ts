import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiplicar',
  templateUrl: './multiplicar.component.html',
  styleUrls: ['./multiplicar.component.css']
})
export class MultiplicarComponent implements OnInit {

  @Input() valorHijo1: number;
  @Input() valorHijo2: number;
  @Output() restultEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  operar() {
    this.restultEvent.emit(this.valorHijo1 * this.valorHijo2);
  }

}
