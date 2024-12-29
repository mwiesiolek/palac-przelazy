import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtrakcjeWPoblizuComponent } from './atrakcje-w-poblizu.component';

describe('AtrakcjeWPoblizuComponent', () => {
  let component: AtrakcjeWPoblizuComponent;
  let fixture: ComponentFixture<AtrakcjeWPoblizuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtrakcjeWPoblizuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtrakcjeWPoblizuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
