import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ListacentrocomercialService {
  listacentro = [
    //lista de objetos para los centros comerciales
    {
      id:'1',
      nombre:'Aurrera',
      imagen:'assets/aurrera.png',
      link:'/centro-comercial/departamento'
    },
    {
      id:'2',
      nombre:'Chedraui',
      imagen:'assets/chedraui.png',
      link:'/centro-comercial/departamento'
    },
    {
      id:'3',
      nombre:'Soriana',
      imagen:'assets/soriana.jpg',
      link:'/centro-comercial/departamento'
    }

  ];
  constructor() { }

  //creacion de metodo "obtenerlista"
  obtenerlista(){
    return this.listacentro;
  }

}
