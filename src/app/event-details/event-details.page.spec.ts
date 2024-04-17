import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventDetailsPage } from './event-details.page';

describe('EventsPagePage', () => {
  let component: EventDetailsPage;
  let fixture: ComponentFixture<EventDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EventDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
