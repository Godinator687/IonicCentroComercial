import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListalineablancaService {
  listaArticulosE=[{
    //todos la descripción de los objetos son ejemplos, corregir 
    id:'1',
    nomrbe:'Lavadoras',
    precio: 'colocar precio',
    descricion:'Lavadora redonda de rio',
    imagen:'src\assets\lineaBlanca\2.jpg'
  },{
    id:'2',
    nomrbe:'Licuadora',
    precio: 'colocar precio',
    descricion:'Sabooor',
    imagen:'src\assets\lineaBlanca\2.jpg'
  },{
    id:'3',
    nomrbe:'Planchas',
    precio: 'colocar precio',
    descricion:'Planchas para planchar',
    imagen:'src\assets\electronica\1.jpg'
  },{
    id:'4',
    nomrbe:'Cafetera',
    precio: 'colocar precio',
    descricion:'Cafe negro...chico',
    imagen:'src\assets\electronica\1.jpg'
  },{
    id:'5',
    nomrbe:'Sartenes',
    precio: 'colocar precio',
    descricion:'Sartenes de Free Fire',
    imagen:'src\assets\electronica\1.jpg'
  }
  ]
  constructor() { }
}
