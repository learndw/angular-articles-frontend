import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { Global } from '../../services/global';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  @Input() articles:Article
  @Input() error:any
  public url_img:string

  constructor() { 
    this.url_img=Global.url_img
  }

  ngOnInit(): void {
  }

}
