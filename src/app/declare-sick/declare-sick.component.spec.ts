import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclareSickComponent } from './declare-sick.component';

describe('DeclareSickComponent', () => {
  let component: DeclareSickComponent;
  let fixture: ComponentFixture<DeclareSickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeclareSickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclareSickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
