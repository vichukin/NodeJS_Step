/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CinemService } from './Cinem.service';

describe('Service: Cinem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CinemService]
    });
  });

  it('should ...', inject([CinemService], (service: CinemService) => {
    expect(service).toBeTruthy();
  }));
});
