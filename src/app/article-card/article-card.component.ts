import { Component, Input, OnInit } from '@angular/core';

import { Articles } from '../articles';
import { ArticleService } from '../article.service';


@Component({
  selector: 'acid-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  articles: Articles[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles);
  }





}
