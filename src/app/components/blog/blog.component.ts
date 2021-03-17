import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from '../../services/article.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [ArticleService]
})
export class BlogComponent implements OnInit {

  public size: string
  public name: string
  public articles: Article
  public url_img:string

  constructor(
    private _articleService: ArticleService
  ) {
    this.url_img=Global.url_img
  }

  ngOnInit(): void {
    this.size = 'small'
    this.name = 'blog'

    this._articleService.getArticles().subscribe(
      response => {
        if(response['articles'].length >=1){

          this.articles = response['articles']
        }
        
      },
      error => {
        console.error(error);

      }
    )
  }

}
