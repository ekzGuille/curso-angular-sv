import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

  @Input() valorHijo1: number;
  @Input() valorHijo2: number;
  constructor() { }

  ngOnInit() {
  }

}
