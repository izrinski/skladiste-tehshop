import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaptopNalogComponent } from './laptop-nalog.component';

describe('LaptopNalogComponent', () => {
  let component: LaptopNalogComponent;
  let fixture: ComponentFixture<LaptopNalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaptopNalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaptopNalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
