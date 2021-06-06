import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CommentComponent } from './comment.component';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();

    spyOn(component.commentInEdit, 'emit');
    spyOn(component.commentDeleted, 'emit');
    spyOn(component.commentEdited, 'emit');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit an event and set isEditClicked on clicking edit', () => {
    const pen = debugElement.query(By.css('.fa-pen'));
    pen.triggerEventHandler('click', null);
    expect(component.isEditClicked).toBeTruthy();
    expect(component.commentInEdit.emit).toHaveBeenCalled();
  });

  it('should emit an event on clicking delete', () => {
    const trash = debugElement.query(By.css('.fa-trash'));
    trash.triggerEventHandler('click', null);
    expect(component.commentDeleted.emit).toHaveBeenCalled();
  });

  it('should emit an event and set isEditClicked on saving edited comment', () => {
    const pen = debugElement.query(By.css('.fa-pen'));
    pen.triggerEventHandler('click', null);
    fixture.detectChanges();

    const editComment = debugElement.query(By.css('app-add-comment'));
    editComment.triggerEventHandler('commentAdded', { name: 'name', comment: 'comment' });
    expect(component.isEditClicked).toBeFalsy();
    expect(component.commentEdited.emit).toHaveBeenCalledWith({ name: 'name', comment: 'comment' });
  });
});
