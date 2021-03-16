import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public user:any;
  public name_template:string

  constructor() {
    this.name_template='Formulario'
    this.user={
      name:'',
      lastname:'',
      bio:'',
      gender:''
    }
   }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user)
  }
}
