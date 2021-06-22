import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobitelNalogComponent } from './mobitel-nalog.component';

describe('MobitelNalogComponent', () => {
  let component: MobitelNalogComponent;
  let fixture: ComponentFixture<MobitelNalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobitelNalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobitelNalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
