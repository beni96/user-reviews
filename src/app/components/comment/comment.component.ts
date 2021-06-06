import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() avatarUrl: string;
  @Input() name: string;
  @Input() comment: string;
  @Output() commentEdited = new EventEmitter<{ name: string, comment: string }>();
  @Output() commentDeleted = new EventEmitter<void>();
  @Output() commentInEdit = new EventEmitter<void>();

  isEditClicked = false;

  onEdit() {
    this.commentInEdit.emit();
    this.isEditClicked = true;
  }

  onDelete() {
    this.commentDeleted.emit();
  }

  onEditSave(event: { name: string, comment: string }) {
    this.isEditClicked = false;
    this.commentEdited.emit({ name: event.name, comment: event.comment });
  }
}
