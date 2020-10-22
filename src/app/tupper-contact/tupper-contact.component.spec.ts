import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TupperContactComponent } from './tupper-contact.component';

describe('TupperContactComponent', () => {
  let component: TupperContactComponent;
  let fixture: ComponentFixture<TupperContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TupperContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TupperContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
