import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  public nombre: string
  public name: string
  
  constructor(
    //Paramentros de Url
    private _route: ActivatedRoute,
    //Redirecciones
    private _router: Router
  ) {
    this.name='Pagina'
   }

  ngOnInit(): void {
    //recoger parametros de url
    this._route.params.subscribe((params) => {
      //Asigar el valor de la url a una variable
      this.nombre=params.nombre

    })
  }

  //redirigir con parametros
  redireccion(){
    this._router.navigate(['pagina','Andres'])
  }

}
