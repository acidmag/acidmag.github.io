import { Injectable } from '@angular/core';

import { Articles } from './articles';
import { ARTICLES } from './mock-articles'

@Injectable()
export class ArticleService {

  getArticles(): Promise<Articles[]> {
    return Promise.resolve(ARTICLES);
  }

  getArticlesSlowly(): Promise<Articles[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getArticles()), 2000);
    });
  }

  getArticle(id: number): Promise<Articles> {
    return this.getArticles()
               .then(articles => articles.find(articles => articles.id === id));
  }
}
