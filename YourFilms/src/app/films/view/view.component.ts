import { Component, OnInit } from "@angular/core";
import { Film } from "../film";
import { FilmService } from "../film.service";
import { AccountService } from "src/app/accounts/account.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})
export class ViewComponent implements OnInit {
  id: number;
  film: Film;
  video: string;

  private player: any;
  private ytEvent: any;

  constructor(
    private filmService: FilmService,
    private accountService: AccountService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = +params["id"];
    });
    let film = this.filmService.getBydId(this.id);
    if (film.length !== 0) {
      this.film = film[0];
      this.video = this.film.video;
    }
  }

  ngOnInit() {}

  onStateChange(event:any): void {
    this.ytEvent = event.data;
  }
  savePlayer(player:any): void {
    this.player = player;
  }
  playVideo(): void {
    this.player.playVideo();
  }
  paseVideo(): void {
    this.player.pauseVideo();
  }
}
