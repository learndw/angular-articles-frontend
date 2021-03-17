import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ArticleService]
})
export class HomeComponent implements OnInit {
  public name:string
  public articles:Article
  constructor(
    private _articleService:ArticleService
  ) { 
    this.name='home'
  }

  ngOnInit(): void {
    this._articleService.getArticles(true).subscribe(
      response => {
        if(response['articles'].length >=1){

          this.articles = response['articles']

        }else{

        }

        
      },
      error => {
        console.error(error);

      }
    )
  }

}
