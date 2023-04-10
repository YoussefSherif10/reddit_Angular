export class ArticleModel {
  title : string;
  link: string;
  votes: number;

  constructor(title: string, link: string, votes ?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  upVote(){
    this.votes++;
  }

  downVote(){
    this.votes--;
  }

  domain (): string | null {
    try {
      const domainPath: string = this.link.split('//')[1];
      return domainPath.split('/')[0];
    } catch (e) {
      return null;
    }
  }
}
