import { Component, OnInit } from '@angular/core';
import { Film } from '../film';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  films: Film[];
  film: Film;

  constructor() {
    this.films = [];
  }

  view(film: Film): void {
    this.film = film;
  }
  reset(): void {
    this.film = undefined;
  }
  ver(): void {
    
  }

  ngOnInit() {
  }

}
