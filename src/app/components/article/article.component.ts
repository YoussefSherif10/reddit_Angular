import {Component, Input} from '@angular/core';
import {ArticleModel} from "../../../article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent {
  article: ArticleModel;

  constructor() {
    this.article = new ArticleModel('Angular', 'http://local/1/2', 10);
  }

  upVote(){
    this.article.upVote();
  }

  downVote(){
    this.article.downVote();
  }

}
