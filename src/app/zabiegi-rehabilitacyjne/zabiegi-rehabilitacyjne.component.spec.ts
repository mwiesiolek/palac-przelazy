import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZabiegiRehabilitacyjneComponent } from './zabiegi-rehabilitacyjne.component';

describe('ZabiegiRehabilitacyjneComponent', () => {
  let component: ZabiegiRehabilitacyjneComponent;
  let fixture: ComponentFixture<ZabiegiRehabilitacyjneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZabiegiRehabilitacyjneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZabiegiRehabilitacyjneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
