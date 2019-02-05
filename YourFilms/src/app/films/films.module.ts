import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IndexComponent } from "./index/index.component";
import { SingleComponent } from "./single/single.component";
import { ViewComponent } from "./view/view.component";
import { ReviewsPipe } from "./reviews.pipe";
import { YoutubePlayerModule } from "ngx-youtube-player";


@NgModule({
  declarations: [IndexComponent, SingleComponent, ViewComponent, ReviewsPipe],
  imports: [CommonModule, YoutubePlayerModule],
  exports: [IndexComponent, ViewComponent]
})
export class FilmsModule {}
