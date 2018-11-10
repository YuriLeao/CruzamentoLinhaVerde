import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  @Input()
  status:'fechado'|'aberto'|'atencao';
  @Input()
  posx:number;
  @Input()
  posy:number;

  constructor() { 
    this.status = "fechado";
  }

  ngOnInit() {
    
  }

}
