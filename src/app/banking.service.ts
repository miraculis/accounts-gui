import { Injectable } from '@angular/core';
import {Account} from './account';
import {Transfer} from './transfer';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {Headers} from '@angular/http';

@Injectable()
export class BankingService {
  headers = new Headers({'Content-Type': 'application/json'});
  constructor(private http: Http) { }
  find(aid: number): Observable<Account[]> {
    return this.http
      .get(`api/accounts/${aid}`)
      .map(response => [response.json() as Account]).catch(this.handleError);
  }
  transfers(id: number): Observable<Transfer[]> {
    return this.http
      .get(`api/accounts/${id}/transfers`)
      .map(response => response.json().transfers as Transfer[]).catch(this.handleError);
  }
  transfer(transfer: Transfer): Observable<number> {
    const url = 'api/transfer';
    return this.http
      .post(url, JSON.stringify(transfer), {headers: this.headers})
      .map((x) => +x.text())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
