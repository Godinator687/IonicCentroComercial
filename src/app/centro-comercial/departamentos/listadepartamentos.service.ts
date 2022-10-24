import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListadepartamentosService {
//creación de la lista de los departamentos a mostrar
//tiene que ser por el momento 2, uno para linea blanca y otro para 
//electronica
listaDepartamento=[
  {
    id:'1',
    nombre:'Linea blanca',
    imagen: 'assets/lineablanca.jpg'
  },
  {
    id:'2',
    nombre:'Electrónica',
    imagen: 'assets/electronica.jpg'
  },
]
  constructor() { }
  //creación del metpdo para obtener la lista "listaDepartamento"
  obtenerDepartamentos(){
    return this.listaDepartamento
  }
}
