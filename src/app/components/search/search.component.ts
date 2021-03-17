import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../models/article';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ArticleService]
  ,
})
export class SearchComponent implements OnInit {

  public articles: Article
  public keyword: string
  public error:any
  constructor(
    private articleService: ArticleService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let keyword = params['keyword']
      this.keyword = keyword
      this.articleService.search(keyword).subscribe(
        response => {
          
          
          if (response['articles'].length >= 1) {

            this.articles = response['articles']
          }

        },
        error => {
          this.error=error['error']
          this._router.navigate(['home'])

        }
      )

    })
  }

}
