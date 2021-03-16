//para poder usar este servicio en una propiedad para tenerlo disponible siempre
import { Injectable } from "@angular/core";
//hacer peticiones ajax al backend, manipular las peticiones para enviar mas datos
import { HttpClient,HttpHeaders } from "@angular/common/http";
//Recoger datos que devuelve la api 
import { Observable } from "rxjs";

import { Article } from '../models/article';
import { Global } from './global';
Article


@Injectable()

export class ArticleService{
    public url:string
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url
    }

    prueba(){
        console.log('Funciona el servicio');
        
    }

    getArticles(){
        return this._http.get(this.url+'articles')
    }
}