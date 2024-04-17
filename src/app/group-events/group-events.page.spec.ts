import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupEventsPage } from './group-events.page';

describe('GroupsPagePage', () => {
  let component: GroupEventsPage;
  let fixture: ComponentFixture<GroupEventsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GroupEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
