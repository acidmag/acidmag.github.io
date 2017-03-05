import { Injectable } from '@angular/core';

import { Articles } from './articles';
import { ARTICLES } from './mock-articles'

@Injectable()
export class ArticleService {

  constructor() { }

  getArticles(): Articles[] {
    return ARTICLES;
  }

}
