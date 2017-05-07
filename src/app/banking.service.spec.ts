/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BankingService } from './banking.service';
import {HttpModule, Response, XHRBackend, ResponseOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

describe('BankingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [BankingService, { provide: XHRBackend, useClass: MockBackend }]
    });
  });

  it('should return single account per id', inject([BankingService, XHRBackend], (service, mockBackend) => {
    expect(service).toBeTruthy();
    const mockAccountResponse = {id: 1, amount: 400000};

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockAccountResponse)
      })));
    });
    service.find(1).subscribe((x) => {
      expect(x[0].id).toBe(1);
    });
  }));

  it('should return number of transfers', inject([BankingService, XHRBackend], (service, mockBackend) => {
    expect(service).toBeTruthy();
    const mockTransfersResponse = {
      transfers: [
        { id: 1, from: 1, to: 2, volume: 400000, ts: 10000000 },
        { id: 2, from: 1, to: 2, volume: 200000, ts: 10000002 },
        { id: 3, from: 1, to: 2, volume: 500000, ts: 10000004 }
      ]};

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockTransfersResponse)
      })));
    });

    service.transfers(1).subscribe((x) => {
      expect(x.length).toBe(3);
      expect(x[0].id).toBe(1);
      expect(x[1].id).toBe(2);
      expect(x[2].id).toBe(3);
    });
  }));

  it('should return status 0', inject([BankingService, XHRBackend], (service, mockBackend) => {
    expect(service).toBeTruthy();
    const mockResponse = 0;

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: mockResponse
      })));
    });

    service.transfer({id: 1, from: 1, to: 2, volume: 100, ts: 1000000}).subscribe((x) => {
      console.log(x);
      expect(x).toBe(0);
    });
  }));
});
