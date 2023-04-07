/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { InfoService } from './Info.service';

describe('Service: Info', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoService]
    });
  });

  it('should ...', inject([InfoService], (service: InfoService) => {
    expect(service).toBeTruthy();
  }));
});
