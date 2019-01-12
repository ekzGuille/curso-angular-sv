import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from '../film';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  @Input() filmInput: Film;
  @Output() viewEvent = new EventEmitter<Film>();
  constructor() { }

  ngOnInit() {
  }

  view(film:Film){
    this.viewEvent.emit(film);
  }
}
