import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TupperMainComponent } from './tupper-main.component';

describe('TupperMainComponent', () => {
  let component: TupperMainComponent;
  let fixture: ComponentFixture<TupperMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TupperMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TupperMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
