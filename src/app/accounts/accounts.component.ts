import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';
import {BankingService} from '../banking.service';
import {Observable} from 'rxjs/Observable';
import {Account} from '../account';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  accounts: Observable<Account[]> = Observable.of<Account[]>([]);
  private searchTerms = new Subject<number>();
  constructor(  private service: BankingService,
                private router: Router) { }

  ngOnInit() {
    this.accounts = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        ? this.service.find(term)
        : Observable.of<Account[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Account[]>([]);
      });
  }

  search(term: number): void {
    this.searchTerms.next(term);
  }

  gotoStmt(x: Account): void {
    const link = ['/statement', x.id];
    this.router.navigate(link);
  }

  gotoTransfer(x: Account): void {
    const link = ['/transfer', x.id];
    this.router.navigate(link);
  }
}
