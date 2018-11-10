import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforos',
  templateUrl: './semaforos.component.html',
  styleUrls: ['./semaforos.component.css']
})
export class SemaforosComponent implements OnInit {

  semaforos: Array<semaforoInfo> = [];
  contadorSemaforo = 0;

  constructor() { }

  ngOnInit() {
  }

  click(e: MouseEvent) {
    this.semaforos.push({id: ''+this.contadorSemaforo,status:'fechado',x:e.x,y:e.y});
    this.contadorSemaforo ++; 
  }

}
interface semaforoInfo {
  id: string;
  status: 'fechado' | 'aberto' | 'atencao';
  x: number;
  y: number;
}
