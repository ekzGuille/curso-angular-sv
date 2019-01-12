import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumarComponent } from './sumar/sumar.component';
import { RestarComponent } from './restar/restar.component';
import { MultiplicarComponent } from './multiplicar/multiplicar.component';
import { DividirComponent } from './dividir/dividir.component';

@NgModule({
  declarations: [SumarComponent, RestarComponent, MultiplicarComponent, DividirComponent],
  imports: [
    CommonModule
  ]
})
export class OperacionesModule { }
