import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfronComponent } from './pfron.component';

describe('PfronComponent', () => {
  let component: PfronComponent;
  let fixture: ComponentFixture<PfronComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PfronComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PfronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
