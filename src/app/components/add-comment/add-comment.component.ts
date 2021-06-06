import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  @Input() isEdit = false;
  @Input() name: string;
  @Input() comment: string;
  @Output() commentAdded = new EventEmitter<{ name: string, comment: string }>();

  form: FormGroup;
  formControls: { [key: string]: FormControl };

  constructor(private formbuilder: FormBuilder) {}

  ngOnInit() {
    this.generateControls();
    this.form = this.formbuilder.group(this.formControls);
  }

  generateControls() {
    this.formControls = {
      name: this.formbuilder.control(this.name || '', Validators.required),
      comment: this.formbuilder.control(this.comment || '', Validators.required),
    };
  }

  onSubmit() {
    this.commentAdded.emit({ name: this.formControls.name.value, comment: this.formControls.comment.value });
    this.form.reset();
  }
}
