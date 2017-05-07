import { Injectable } from '@angular/core';
import {Account} from './account';
import {Transfer} from './transfer';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class BankingService {
  TRANSFERS: Transfer[] = [{id: 1, from: 1, to: 1, volume: 100, ts: 1}, {id: 1, from: 1, to: 1, volume: 200, ts: 1}];
  constructor() { }
  find(aid: number): Observable<Account[]> {
    return Observable.of<Account[]>([{id: aid, amount: 500}]);
  }
  transfers(id: number): Observable<Transfer[]> {
    return Observable.of<Transfer[]>(this.TRANSFERS);
  }
  transfer(transfer: Transfer): Observable<number> {
    this.TRANSFERS.concat(transfer);
    return Observable.of<number>(0);
  }
}
