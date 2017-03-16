import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Articles } from './articles';

@Injectable()
export class ArticleSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Articles[]> {
    return this.http
      .get('app/articles/?tagline=${term}')
      .map(response => response.json().data as Articles[]);
  }
}
