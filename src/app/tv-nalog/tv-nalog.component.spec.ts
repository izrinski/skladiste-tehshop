import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvNalogComponent } from './tv-nalog.component';

describe('TvNalogComponent', () => {
  let component: TvNalogComponent;
  let fixture: ComponentFixture<TvNalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvNalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvNalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
