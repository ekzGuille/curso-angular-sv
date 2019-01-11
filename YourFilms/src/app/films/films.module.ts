import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { SingleComponent } from './single/single.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [IndexComponent, SingleComponent, ViewComponent],
  imports: [
    CommonModule
  ]
})
export class FilmsModule { }
