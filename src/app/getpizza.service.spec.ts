import { TestBed, inject } from '@angular/core/testing';

import { GetPizzaService } from './getpizza.service';
import { HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

describe('GetPizzaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPizzaService, HttpClient, HttpHandler],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([GetPizzaService], (service: GetPizzaService) => {
    expect(service).toBeTruthy();
  }));
});
