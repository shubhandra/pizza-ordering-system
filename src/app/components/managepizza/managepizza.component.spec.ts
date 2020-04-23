import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagepizzaComponent } from './managepizza.component';

describe('ManagepizzaComponent', () => {
  let component: ManagepizzaComponent;
  let fixture: ComponentFixture<ManagepizzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagepizzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagepizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
