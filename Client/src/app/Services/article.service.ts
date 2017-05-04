import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Articles } from '../articles';
// import { ARTICLES } from './mock-articles'

@Injectable()
export class ArticleService {

  private articlesUrl = 'api/articles';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  constructor(private http: Http) { }


  // Get all articles
  getArticles(): Promise<Articles[]> {
    return this.http.get(this.articlesUrl)
                .toPromise()
                .then(response => response.json().data as Articles[])
                .catch(this.handleError);
  }



  getArticlesSlowly(): Promise<Articles[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getArticles()), 500);
    });
  }



  // Get article by ID
  getArticle(id: number): Promise<Articles> {
      const url = `${this.articlesUrl}/${id}`;
      return this.http.get(url)
        .toPromise()
        .then(response => response.json().data as Articles)
        .catch(this.handleError);
  }


  // Update Article
  update(articles: Articles): Promise<Articles> {
    const url = `${this.articlesUrl}/${articles.id}`;
    return this.http
      .put(url, JSON.stringify(articles), {headers: this.headers})
      .toPromise()
      .then(() => articles)
      .catch(this.handleError);
  }

  // Create an article
  create(article: Articles): Promise<Articles> {
    return this.http
      .post(this.articlesUrl, JSON.stringify(article), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }


  // Delete an article
  delete(id: number): Promise<void> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
