import {TestBed, inject} from '@angular/core/testing';

import {HttpServiceService} from './http.service';

describe('MyHttpServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpServiceService]
    });
  });

  it('should ...', inject([HttpServiceService], (service: HttpServiceService) => {
    expect(service).toBeTruthy();
  }));
});
