import { DebugElement } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();

    component.comments = [{ avatarUrl: 'url', name: 'name', comment: 'comment' }];
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should set isCommentInEdit on editing comment', () => {
    const comment = debugElement.query(By.css('app-comment'));
    comment.triggerEventHandler('commentInEdit', null);

    expect(component.isCommentInEdit).toBeTruthy();
  });

  it('should delete comment on deleting comment', () => {
    const comment = debugElement.query(By.css('app-comment'));
    comment.triggerEventHandler('commentDeleted', null);

    expect(component.comments.length).toEqual(0);
  });

  it('should edit comment on saving edited comment', () => {
    expect(component.comments.length).toEqual(1);
    const comment = debugElement.query(By.css('app-comment'));
    comment.triggerEventHandler('commentEdited', { name: 'edited name', comment: 'edited comment' });

    expect(component.comments.length).toEqual(1);
    expect(component.comments[0].name).toEqual('edited name');
  });

  it('should add comment to comments on adding comment', () => {
    expect(component.comments.length).toEqual(1);
    const addComment = debugElement.query(By.css('app-add-comment'));
    addComment.triggerEventHandler('commentAdded', { name: 'added name', comment: 'added comment' });

    // Work around for waiting imgGen().
    setTimeout(() => {
      expect(component.comments.length).toEqual(2);
      expect(component.comments[1].name).toEqual('added name');
    }, 0);
  });
});
