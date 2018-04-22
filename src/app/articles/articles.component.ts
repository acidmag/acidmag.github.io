import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Articles } from '../articles';
import { ArticleService } from '../article.service';

@Component({

  selector: 'acid-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: Articles[];
  selectedArticle: Articles;

  constructor(
    private router: Router,
    private articleService: ArticleService
  ) { }

  getArticles(): void {
    this.articleService.getArticles()
      .subscribe(articles => this.articles = articles);
  }

  ngOnInit() {
    this.getArticles();
  }

  onSelect(articles: Articles): void {
    this.selectedArticle = articles;
  }

  gotoArticle(): void {
    this.router.navigate(['/article', this.selectedArticle.id]);
  }

}
