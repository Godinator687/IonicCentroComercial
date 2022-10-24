import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ListacentrocomercialService } from './listacentrocomercial.service';

@Component({
  selector: 'app-centro-comercial',
  templateUrl: './centro-comercial.page.html',
  styleUrls: ['./centro-comercial.page.scss'],
})
export class CentroComercialPage implements OnInit {

  listacentro = [
    //lista de objetos
  

  ];//declaramos en el constructor el servicio, mandamos a llamar el servicio.
  constructor(private lista:ListacentrocomercialService, private router:Router) { }

  ngOnInit() {
    this.listacentro = this.lista.obtenerlista();

  }
  onClick(id:String){
    if(id === '1')
    this.router.navigate(['/centro-comercial/departamentos']);
    if(id === '2')
    this.router.navigate(['/centro-comercial/departamentos']);
    if(id === '3')
    this.router.navigate(['/centro-comercial/departamentos']);
  }
  
}