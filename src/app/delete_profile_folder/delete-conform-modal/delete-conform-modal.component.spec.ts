import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConformModalComponent } from './delete-conform-modal.component';

describe('DeleteConformModalComponent', () => {
  let component: DeleteConformModalComponent;
  let fixture: ComponentFixture<DeleteConformModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteConformModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteConformModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
