import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { AddCommentComponent } from './add-comment.component';

describe('AddCommentComponent', () => {
  let component: AddCommentComponent;
  let fixture: ComponentFixture<AddCommentComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddCommentComponent],
      imports: [ReactiveFormsModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommentComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();

    spyOn(component.commentAdded, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event on submit', () => {
    component.formControls.name.setValue('name');
    component.formControls.comment.setValue('comment');
    const form = debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);
    expect(component.commentAdded.emit).toHaveBeenCalledWith({ name: 'name', comment: 'comment' });
  });
});
