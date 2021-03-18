import { Component, OnInit } from '@angular/core';
//Para obtener las propiedades de las rutas
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

//Alertas
import swal from 'sweetalert';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {

  public name: string
  public size: string
  public article: Article
  public url_img: string

  constructor(
    private _articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.size = 'small'
    this.name = 'blog'
    this.url_img = Global.url_img
  }

  ngOnInit(): void {


    this._route.params.subscribe(params => {
      let id = params['id']

      this._articleService.getArticle(id).subscribe(
        response => {


          if (response['article']) {
            this.article = response['article']
          } else {
            this._router.navigate(['/home'])
          }
        },
        error => {
          console.log(error);

        }
      )

    })
  }

  deleteArticle(id) {
    swal({
      title: "Estas seguro?",
      text: "Una vez eliminado el articulo no se podra recuperar!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this._articleService.deleteArticle(id).subscribe(
          response => {
            swal("Tu articulo ha sido eliminado correctamente!", {
              icon: "success",
            });
            this._router.navigate(['/blog'])
            
          },
          error => {

            swal("Your imaginary file is safe!");
            this._router.navigate(['/blog/article/' + this.article._id])
    
    
          }
        )
      } 
    });
    
  }

}
