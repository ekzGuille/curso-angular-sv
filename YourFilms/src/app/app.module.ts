import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { UIModule } from "./ui/ui.module";
import { FilmsModule } from "./films/films.module";
import { AccountsModule } from "./accounts/accounts.module";
import { FormsModule } from "@angular/forms";
import { routes } from "./app.routes";
import { RouterModule, Routes } from "@angular/router";
import { YoutubePlayerModule } from "ngx-youtube-player";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    UIModule,
    FilmsModule,
    AccountsModule,
    RouterModule.forRoot(routes),
    YoutubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
