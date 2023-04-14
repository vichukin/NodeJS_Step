/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HtttpServiceService } from './htttp-service.service';

describe('Service: HtttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HtttpServiceService]
    });
  });

  it('should ...', inject([HtttpServiceService], (service: HtttpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
