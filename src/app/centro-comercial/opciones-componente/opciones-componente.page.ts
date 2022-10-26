import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-opciones-componente',
  templateUrl: './opciones-componente.page.html',
  styleUrls: ['./opciones-componente.page.scss'],
})
export class OpcionesComponentePage implements OnInit {

  fruta = ["naranjas", "peras", "uvas", "mango", "fresa"]
  constructor() { }

  //metodo de enviar los datos por consola
  selecciona($event){
    console.log($event.detail.value);
  }

  ngOnInit() {
  }

}
