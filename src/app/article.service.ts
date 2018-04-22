import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/observable';

import { Articles } from './articles';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { ARTICLES } from './mock-articles'

@Injectable()
export class ArticleService {

  private articlesUrl = 'api/articles';  // URL to web api
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.throw(error.message || error);
  }

  constructor(private http: HttpClient) { }

  // Get all articles
  getArticles(): Observable<Articles[]> {
    return this.http.get(this.articlesUrl)
      .map(response => response as Articles[])
      .catch(this.handleError);
  }

  // Get article by ID
  getArticle(id: number): Observable<Articles> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.get(url)
      .map(response => response as Articles)
      .catch(this.handleError);
  }


  // Update Article
  update(articles: Articles): Observable<Articles> {
    const url = `${this.articlesUrl}/${articles.id}`;
    return this.http
      .put(url, JSON.stringify(articles), { headers: this.headers })
      .catch(this.handleError);
  }

  // Create an article
  create(article: Articles): Observable<Articles> {
    return this.http
      .post(this.articlesUrl, JSON.stringify(article), { headers: this.headers })
      .catch(this.handleError);
  }


  // Delete an article
  delete(id: number): Observable<void> {
    const url = `${this.articlesUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .catch(this.handleError);
  }
}
