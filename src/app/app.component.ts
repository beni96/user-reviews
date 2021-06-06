import { Component, OnInit } from '@angular/core';

export interface Comment {
  avatarUrl: string;
  name: string;
  comment: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  comments: Comment[] = [];
  isCommentInEdit = false;

  ngOnInit() {
    this.comments = JSON.parse(localStorage.getItem('comments')) || [];
  }

  onCommentAdd(event: { name: string, comment: string }) {
    const imgGen = require('@dudadev/random-img');
    imgGen().then(avatarUrl => {
      const comment: Comment = { avatarUrl, name: event.name, comment: event.comment };
      this.comments  = this.comments.concat(comment);
      localStorage.setItem('comments', JSON.stringify(this.comments));
    });
  }

  onCommentInEdit() {
    this.isCommentInEdit = true;
  }

  onDelete(index: number) {
    this.comments.splice(index, 1);
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }

  onEdit(index: number, event: { name: string, comment: string }) {
    this.comments[index].name = event.name;
    this.comments[index].comment = event.comment;
    this.isCommentInEdit = false;
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }
}
