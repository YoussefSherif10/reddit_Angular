import { Component } from '@angular/core';
import {ArticleModel} from "../article.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  article!: ArticleModel;



  addArticle() {

  }
}
