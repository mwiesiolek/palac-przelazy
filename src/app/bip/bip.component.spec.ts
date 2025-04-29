import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BipComponent } from './bip.component';

describe('BipComponent', () => {
  let component: BipComponent;
  let fixture: ComponentFixture<BipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
