import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopDialogComponent } from './laptop-dialog.component';

describe('LaptopDialogComponent', () => {
  let component: LaptopDialogComponent;
  let fixture: ComponentFixture<LaptopDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
