import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UIModule } from './ui/ui.module';
import { FilmsModule } from './films/films.module';
import { AccountsModule } from './accounts/accounts.module';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UIModule,
    FilmsModule,
    AccountsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
