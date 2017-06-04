import 'rxjs/add/operator/switchMap';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Articles } from '../articles';
import { ArticleService } from '../article.service';

@Component({

  selector: 'article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

  articles: Articles;

  constructor(
      private articleService: ArticleService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.articleService.getArticle(+params['id']))
      .subscribe(articles => this.articles = articles);
  }

  goBack(): void {
    this.location.back();
  }

}
