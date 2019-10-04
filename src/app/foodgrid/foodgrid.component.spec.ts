import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodgridComponent } from './foodgrid.component';

describe('FoodgridComponent', () => {
  let component: FoodgridComponent;
  let fixture: ComponentFixture<FoodgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
