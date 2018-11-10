import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforos',
  templateUrl: './semaforos.component.html',
  styleUrls: ['./semaforos.component.css']
})
export class SemaforosComponent implements OnInit {

  semaforos: Array<SemaforoInfo> = [];
  contadorSemaforo = 0;

  constructor() { }

  ngOnInit() {
  }

  click(e: MouseEvent) {
    console.log(e);
    this.semaforos.push({ id: '' + this.contadorSemaforo, status: 'fechado', x: e.x - 10, y: e.y - 10, pedestre: e.shiftKey });
    this.contadorSemaforo++;
  }

}
interface SemaforoInfo {
  id: string;
  status: 'fechado' | 'aberto' | 'atencao';
  pedestre: boolean;
  x: number;
  y: number;
}
