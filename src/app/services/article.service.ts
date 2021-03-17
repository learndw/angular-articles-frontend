//para poder usar este servicio en una propiedad para tenerlo disponible siempre
import { Injectable } from "@angular/core";
//hacer peticiones ajax al backend, manipular las peticiones para enviar mas datos
import { HttpClient, HttpHeaders } from "@angular/common/http";
//Recoger datos que devuelve la api 
import { Observable } from "rxjs";

import { Article } from '../models/article';
import { Global } from './global';
Article


@Injectable()

export class ArticleService {
    public url: string
    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url
    }

    prueba() {
        console.log('Funciona el servicio');

    }

    getArticles(last: any = null): Observable<any> {
        var articles = 'articles'

        if (last != null) {
            var articles = 'articles/true'

        }

        return this._http.get(this.url + articles)
    }

    getArticle(articleId): Observable<any> {
        return this._http.get(this.url + 'article/' + articleId)
    }

    search(keyword: string): Observable<any> {
        return this._http.get(this.url + 'search/' + keyword)
    }

    saveArticle(article): Observable<any> {
        let params = JSON.stringify(article)

        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.post(this.url + 'save', params, { headers: headers })
    }

    updateArticle(id, article): Observable<any> {

        let params = JSON.stringify(article)

        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.put(this.url + 'article/' + id, params, { headers: headers })
    }
    
    deleteArticle(id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.delete(this.url + 'article/' + id, { headers: headers })
    }
}