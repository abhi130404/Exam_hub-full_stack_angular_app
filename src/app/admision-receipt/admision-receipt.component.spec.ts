import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisionReceiptComponent } from './admision-receipt.component';

describe('AdmisionReceiptComponent', () => {
  let component: AdmisionReceiptComponent;
  let fixture: ComponentFixture<AdmisionReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmisionReceiptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmisionReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
