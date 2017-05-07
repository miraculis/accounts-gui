import { Component, OnInit } from '@angular/core';
import {BankingService} from '../banking.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Transfer} from '../transfer';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent implements OnInit {
  transfers: Observable<Transfer[]> = Observable.of<Transfer[]>([]);
  id = 0;
  constructor( private service: BankingService,
               private route: ActivatedRoute,
               private router: Router) { }
  ngOnInit() {
    this.route.params.subscribe((x) => this.transfers = this.service.transfers(this.id = +x['id']));
  }
  gotoSearch(): void {
    const link = ['/accounts'];
    this.router.navigate(link);
  }
  gotoTransfers(id: number): void {
    const link = ['/transfers', id];
    this.router.navigate(link);
  }
}
