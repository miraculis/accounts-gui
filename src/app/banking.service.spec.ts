/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BankingService } from './banking.service';

describe('BankingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BankingService]
    });
  });

  it('should return single account per id', inject([BankingService], (service: BankingService) => {
    expect(service).toBeTruthy();
    service.find(1).subscribe((x) => {
      expect(x[0].id).toBe(1);
    });
  }));

  it('should return number of transfers', inject([BankingService], (service: BankingService) => {
    expect(service).toBeTruthy();
    service.transfers(1).subscribe((x) => {
      expect(x.length).toBeGreaterThan(1);
    });
  }));
});
