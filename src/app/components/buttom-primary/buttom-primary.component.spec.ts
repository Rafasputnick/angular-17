import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomPrimaryComponent } from './buttom-primary.component';

describe('ButtomPrimaryComponent', () => {
  let component: ButtomPrimaryComponent;
  let fixture: ComponentFixture<ButtomPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtomPrimaryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtomPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
