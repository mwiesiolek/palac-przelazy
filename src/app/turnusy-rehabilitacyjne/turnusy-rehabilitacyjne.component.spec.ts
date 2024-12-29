import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurnusyRehabilitacyjneComponent } from './turnusy-rehabilitacyjne.component';

describe('TurnusyRehabilitacyjneComponent', () => {
  let component: TurnusyRehabilitacyjneComponent;
  let fixture: ComponentFixture<TurnusyRehabilitacyjneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurnusyRehabilitacyjneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurnusyRehabilitacyjneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
