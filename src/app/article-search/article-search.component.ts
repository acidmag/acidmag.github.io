import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ArticleSearchService } from '../article-search.service';
import { Articles } from '../articles';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';





@Component({
  selector: 'acid-article-search',
  templateUrl: './article-search.component.html',
  styleUrls: ['./article-search.component.css'],
  providers: [ArticleSearchService]
})

export class ArticleSearchComponent implements OnInit {

  articles: Observable<Articles[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private articleSearchService: ArticleSearchService,
    private router: Router) { }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.articles = this.searchTerms
      .debounceTime(100)
      .distinctUntilChanged()
      .switchMap(term => term ? this.articleSearchService.search(term) : Observable.of<Articles[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Articles[]>([]);
      });
  }

  gotoDetail(article: Articles): void {
    const link = ['/article', article.id];
    this.router.navigate(link);
  }

}
