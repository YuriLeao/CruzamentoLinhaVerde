import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  @Input()
  status: 'fechado' | 'aberto' | 'atencao' | null;
  @Input()
  posx: number;
  @Input()
  posy: number;
  @Input()
  pedestre = false;

  constructor() {
    this.status = 'fechado';
  }

  ngOnInit() {

  }

  cor(status) {
    switch (status) {
      case 'aberto':
        return 'green';
        break;
      case 'fechado':
        return 'red';
        break;
      case 'atencao':
        return 'yellow';
        break;
      default:
        break;
    }
  }

}
