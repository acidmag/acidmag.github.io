import { Component, OnInit } from '@angular/core';
export class ArticleCard {
  title: string;
  author: string;
  dateCreated: string;
}

const ARTICLE_CARDS: ArticleCard[] = [
  {
    title: "Article 1",
    author: "Author 1",
    dateCreated: "03/02/2017"
  },
  {
    title: "Article 2",
    author: "Author 2",
    dateCreated: "03/02/2017"
  },
  {
    title: "Article 3",
    author: "Author 3",
    dateCreated: "03/02/2017"
  },
  {
    title: "Article 4",
    author: "Author 4",
    dateCreated: "03/02/2017"
  }
];

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  articleCards = ARTICLE_CARDS;

/*
  articleCard: ArticleCard = {
    title: "Article 1",
    author: "Author 1",
    dateCreated: "03/02/2017"
  }
  */
}
