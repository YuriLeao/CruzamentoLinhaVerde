import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemaforoComponent } from './semaforo/semaforo.component';

@NgModule({
  declarations: [
    SemaforoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SemaforoComponent
  ]
})
export class ComponentesModule { }
