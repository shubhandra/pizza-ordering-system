import { TestBed } from '@angular/core/testing';

import { PizzaserviceService } from './pizzaservice.service';

describe('PizzaserviceService', () => {
  let service: PizzaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
