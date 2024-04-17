import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChatsPagePage } from './chats-page.page';

describe('ChatsPagePage', () => {
  let component: ChatsPagePage;
  let fixture: ComponentFixture<ChatsPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ChatsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
