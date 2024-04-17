import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GroupsAdminPage } from './groups-admin.page';

describe('GroupsAdminPage', () => {
  let component: GroupsAdminPage;
  let fixture: ComponentFixture<GroupsAdminPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GroupsAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
