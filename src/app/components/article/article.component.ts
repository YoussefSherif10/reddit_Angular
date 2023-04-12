import {Component, Input, OnInit} from '@angular/core';
import {ArticleModel} from "../../../article.model";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  @Input() article!: ArticleModel;

  constructor() {
  }

  ngOnInit() {

  }

  upVote(){
    this.article.upVote();
  }

  downVote(){
    this.article.downVote();
  }

}
