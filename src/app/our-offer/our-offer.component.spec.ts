import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurOfferComponent } from './our-offer.component';

describe('OurOfferComponent', () => {
  let component: OurOfferComponent;
  let fixture: ComponentFixture<OurOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
