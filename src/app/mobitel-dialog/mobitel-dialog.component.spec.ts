import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobitelDialogComponent } from './mobitel-dialog.component';

describe('MobitelDialogComponent', () => {
  let component: MobitelDialogComponent;
  let fixture: ComponentFixture<MobitelDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobitelDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MobitelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
