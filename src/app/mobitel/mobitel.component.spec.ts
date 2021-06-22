import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobitelComponent } from './mobitel.component';

describe('MobitelComponent', () => {
  let component: MobitelComponent;
  let fixture: ComponentFixture<MobitelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobitelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
