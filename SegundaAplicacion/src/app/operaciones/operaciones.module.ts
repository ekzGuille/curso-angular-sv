import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumarComponent } from './sumar/sumar.component';
import { RestarComponent } from './restar/restar.component';
import { MultiplicarComponent } from './multiplicar/multiplicar.component';
import { DividirComponent } from './dividir/dividir.component';
import { OperacionesComponent } from './operaciones/operaciones.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SumarComponent, RestarComponent, MultiplicarComponent, DividirComponent, OperacionesComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [OperacionesComponent]
})
export class OperacionesModule { }
