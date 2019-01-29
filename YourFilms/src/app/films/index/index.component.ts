import { Component, OnInit } from "@angular/core";
import { Film } from "../film";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.css"]
})
export class IndexComponent implements OnInit {
  films: Film[];
  film: Film;

  constructor() {
    this.films = null;
  }
  view(film: Film) {
    this.film = film;
  }
  reset() {
    this.film = undefined;
  }
  ver(id: number) {
    console.log("Ver película:" + id);
  }

  ngOnInit() {}
}
