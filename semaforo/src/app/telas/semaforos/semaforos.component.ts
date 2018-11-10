import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforos',
  templateUrl: './semaforos.component.html',
  styleUrls: ['./semaforos.component.css']
})
export class SemaforosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  click(e: MouseEvent) {
    alert(`x ${e.x} y ${e.y}`)
  }

}
