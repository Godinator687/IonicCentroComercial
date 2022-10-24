import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListadepartamentosService } from './listadepartamentos.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.page.html',
  styleUrls: ['./departamentos.page.scss'],
})
export class DepartamentosPage implements OnInit {

  //creación de la obtención de la lista (listaDepartamento)
  listaDepartamento=[
    //lista de objetos
  ];
//mandamos a llamar el servicio con una variable privada que se
//llama listaD y empezamos a acarrear la lista al servicio
  constructor(private lsitaD: ListadepartamentosService, private router:Router) { }

  ngOnInit() { 
    this.listaDepartamento = this.lsitaD.obtenerDepartamentos();
  }
  onClick(id:String){
    if(id === '1')
    this.router.navigate(['/departamentos/linea-blanca']);
    if(id === '2')
    this.router.navigate(['/departamentos/electronica']);
  }
}
