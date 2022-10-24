import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaElectronicaService {
//todos la descripción de los objetos son ejemplos, corregir 
//pedir ayuda
  listaArticulosE=[{
    id:'1',
    nomrbe:'Control remoto',
    precio: 'colocar precio',
    descricion:'Control remoto para algo',
    imagen:'src\assets\electronica\1.jpg'
  },{
    id:'2',
    nomrbe:'Baterias',
    precio: 'colocar precio',
    descricion:'Baterias de las que dan toques',
    imagen:'src\assets\electronica\2.jpg'
  },{
    id:'3',
    nomrbe:'Cascos Gaymer',
    precio: 'colocar precio',
    descricion:'Cascos para la gente Gaymer',
    imagen:'src\assets\electronica\1.jpg'
  },{
    id:'4',
    nomrbe:'Cargadores',
    precio: 'colocar precio',
    descricion:'Cargadores para cargar',
    imagen:'src\assets\electronica\1.jpg'
  },{
    id:'5',
    nomrbe:'SmarthWatch',
    precio: 'colocar precio',
    descricion:'Ommnitrix',
    imagen:'src\assets\electronica\1.jpg'
  }
  
]
  constructor() { }
}
