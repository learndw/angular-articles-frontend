import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public keyword: string
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  searchArticle() {
    this._router.navigate(['search', this.keyword])
  }

}
