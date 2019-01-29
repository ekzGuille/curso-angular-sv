import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IndexComponent } from "./index/index.component";
import { SingleComponent } from "./single/single.component";
import { ViewComponent } from "./view/view.component";
import { ReviewsPipe } from "./reviews.pipe";

@NgModule({
  declarations: [IndexComponent, SingleComponent, ViewComponent, ReviewsPipe],
  imports: [CommonModule],
  exports: [IndexComponent, ViewComponent]
})
export class FilmsModule {}
