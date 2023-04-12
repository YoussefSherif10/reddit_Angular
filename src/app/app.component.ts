import { Component } from '@angular/core';
import {ArticleModel} from "../article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: ArticleModel[];
  title !: string;
  link !: string;

  constructor() {
    this.articles = [
      new ArticleModel('Angular', 'http://angular.io', 3),
      new ArticleModel('Youssef', 'http://youssef.com', 1),
      new ArticleModel('React', 'http://react.com', 2),
    ]
  }

  addArticle() {
    this.articles.push(new ArticleModel(this.title, this.link, 0))
    this.title = '';
    this.link = '';
  }

  sortedArticle(): ArticleModel[] {
    return this.articles.sort((a: ArticleModel, b: ArticleModel) => b.votes - a.votes);
  }
}
