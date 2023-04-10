import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title !: string;
  link !: string;

  // addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
  //   console.log(`Added ${title.value} article with link: ${link}`);
  //   return false;
  // }

  addArticle() {
    console.log(`${this.title}, ${this.link}`);
  }
}
