import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Articles } from './articles';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticleSearchService {


  private articlesUrl = 'api/articles';  // URL to web api
  constructor(private http: HttpClient) { }

  search(term: string): Observable<Articles[]> {
    return this.http
      .get(`${this.articlesUrl}/?article=${term}`)
      .map(response => response as Articles[]);
  }
}
