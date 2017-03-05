import { Component, Input, OnInit } from '@angular/core';
import { Articles } from '../articles';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input()

  articles = ARTICLES[];


}
