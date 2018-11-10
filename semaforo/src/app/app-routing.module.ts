import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SemaforosComponent } from './telas/semaforos/semaforos.component';

const routes: Routes = [{
  path: '', component: SemaforosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
