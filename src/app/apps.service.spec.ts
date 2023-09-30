import { TestBed, inject } from '@angular/core/testing';

import { AppsService } from './apps.service';
import { HttpClientModule, HttpHandler, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

describe('AppsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppsService, HttpClient, HttpHandler],
      imports: [HttpClientModule, BrowserModule]
    });
  });

  it('should be created', inject([AppsService], (service: AppsService) => {
    expect(service).toBeTruthy();
  }));
});
