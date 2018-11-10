import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemaforoComponent } from './componentes/semaforo/semaforo.component';
import { SemaforosComponent } from './telas/semaforos/semaforos.component';
import { ComponentesModule } from './componentes/componentes.module';

@NgModule({
  declarations: [
    AppComponent,
    SemaforosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule
  ],
  exports: [SemaforoComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
