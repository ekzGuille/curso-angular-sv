import { Component, OnInit } from "@angular/core";
import { Film } from "../film";
import { Router } from '@angular/router';
import { FilmService } from '../film.service';

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  films: Film[];
  film: Film;

  constructor(private router:Router, private filmService:FilmService) {
    this.films = filmService.getAll();
  }
  view(film: Film) {
    this.film = film;
  }
  reset() {
    this.film = undefined;
  }
  ver(id: number) {
    this.router.navigate(["View",id]);
  }

  ngOnInit() {}
}
