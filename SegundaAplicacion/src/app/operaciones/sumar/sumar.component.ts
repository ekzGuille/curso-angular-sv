import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

  @Input() valorHijo1: number;
  @Input() valorHijo2: number;
  @Output() resultEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  operar(){
    this.resultEvent.emit(this.valorHijo1 + this.valorHijo2);
  }

}
