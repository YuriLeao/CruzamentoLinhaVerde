import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforos',
  templateUrl: './semaforos.component.html',
  styleUrls: ['./semaforos.component.css']
})
export class SemaforosComponent implements OnInit {

  semaforos: Array<SemaforoInfo> = [];
  contadorSemaforo = 1;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('semaforos')) {
      this.semaforos.push(...JSON.parse(localStorage.getItem('semaforos')));
    }

    this.logicaSemaforo123Aberto();

  }

  ngOnDestroy(): void {

  }

  click(e: MouseEvent) {
    // console.log(e);
    this.semaforos.push({ id: '' + this.contadorSemaforo, status: null, x: e.x - 10, y: e.y - 10, pedestre: e.shiftKey });
    this.contadorSemaforo++;

    localStorage.setItem('semaforos', JSON.stringify(this.semaforos));
  }

  abrir(semaforo: SemaforoInfo) {
    semaforo.status = "aberto";
  }

  fechar(semaforo: SemaforoInfo) {
    semaforo.status = "atencao";
    setTimeout(() => {
      semaforo.status = "fechado";
    }, 3000);
  }


  logicaSemaforo123Aberto() {
    setTimeout(() => {

      this.semaforos.forEach(semaforo => {
        if (semaforo.pedestre === false) {
          if (semaforo.id === "1" || semaforo.id === "2" || semaforo.id === "3") {
            this.abrir(semaforo);
          } else if (semaforo.status != "fechado") {
            this.fechar(semaforo);
          }
        } else {
          if ((semaforo.id === "10" || semaforo.id === "12" || semaforo.id === "11") && semaforo.status != "fechado") {
            this.fechar(semaforo);
          } else if((semaforo.id === "10" || semaforo.id === "12" || semaforo.id === "11") == false){
            this.abrir(semaforo);
          }
        }
      });
      this.logicaSemaforo67Aberto();
    }, 10000);
  }

  logicaSemaforo67Aberto() {
    setTimeout(() => {

      this.semaforos.forEach(semaforo => {
        if (semaforo.pedestre === false) {
          if (semaforo.id === "6" || semaforo.id === "7" || semaforo.id === "9" || semaforo.id === "8") {
            this.abrir(semaforo);
          } else if (semaforo.status != "fechado") {
            this.fechar(semaforo);
          }
        } else {
          if ((semaforo.id === "10" || semaforo.id === "12" || semaforo.id === "11") ) {
            this.abrir(semaforo);
          }else if(semaforo.id === "13" && semaforo.status != "fechado"){
            this.fechar(semaforo);
          }
        }
      });
      this.logicaSemaforo9Aberto();
    }, 10000);
  }

  logicaSemaforo9Aberto() {
    setTimeout(() => {

      this.semaforos.forEach(semaforo => {
        if (semaforo.pedestre === false) {
          if (semaforo.id === "9") {
            this.abrir(semaforo);
          } else if (semaforo.status != "fechado") {
            this.fechar(semaforo);
          }
        } else {
          if ((semaforo.id === "10" || semaforo.id === "11" || semaforo.id === "13") && semaforo.status != "fechado") {
            this.abrir(semaforo);
          }
        }
      });
      this.logicaSemaforo914Aberto();
    }, 10000);
  }

  logicaSemaforo914Aberto() {
    setTimeout(() => {

      this.semaforos.forEach(semaforo => {
        if (semaforo.pedestre === false) {
          if (semaforo.id === "9" || semaforo.id === "1" || semaforo.id === "4") {
            this.abrir(semaforo);
          } else if (semaforo.status != "fechado") {
            this.fechar(semaforo);
          }
        } else {
          if (semaforo.id === "10" && semaforo.status != "fechado") {
            this.fechar(semaforo);
          } else {
            this.abrir(semaforo);
          }
        }
      });
      this.logicaSemaforo123Aberto();
    }, 10000);
  }

  logicaSemaforoPedestresAberto() {
    setTimeout(() => {

      this.semaforos.forEach(semaforo => {
        if (semaforo.pedestre === false) {
          if (semaforo.status != "fechado") {
            this.fechar(semaforo);
          }
        } else {
          this.abrir(semaforo);
        }
      });
      this.logicaSemaforo123Aberto();
    }, 10000);
  }

  limpar() {
    this.semaforos = [];
    localStorage.setItem('semaforos', JSON.stringify(this.semaforos));
  }


}
interface SemaforoInfo {
  id: string;
  status: 'fechado' | 'aberto' | 'atencao' | null;
  pedestre: boolean;
  x: number;
  y: number;
}

