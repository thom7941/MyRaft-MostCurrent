import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResourcesPagePage } from './resources-page.page';

describe('ResourcesPagePage', () => {
  let component: ResourcesPagePage;
  let fixture: ComponentFixture<ResourcesPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ResourcesPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
