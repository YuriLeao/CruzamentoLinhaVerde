import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemaforoComponent } from './componentes/semaforo/semaforo.component';
import { SemaforosComponent } from './telas/semaforos/semaforos.component';

@NgModule({
  declarations: [
    AppComponent,
    SemaforoComponent,
    SemaforosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [SemaforoComponent],
  providers: [],
  entryComponents: [
    SemaforosComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
