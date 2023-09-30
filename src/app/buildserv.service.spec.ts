import { TestBed, inject } from '@angular/core/testing';

import { BuildservService } from './buildserv.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpHandler } from '@angular/common/http';

describe('BuildservService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildservService, HttpClient, HttpHandler],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([BuildservService], (service: BuildservService) => {
    expect(service).toBeTruthy();
  }));
});
