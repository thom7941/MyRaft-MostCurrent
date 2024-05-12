import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupFiltersPage } from './group-filters.page';

describe('GroupFiltersPage', () => {
  let component: GroupFiltersPage;
  let fixture: ComponentFixture<GroupFiltersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GroupFiltersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
