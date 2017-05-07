import { Component, OnInit } from '@angular/core';
import {BankingService} from '../banking.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {
  fromId: number;
  amount: number;
  toId: number;
  result: string;

  constructor( private service: BankingService,
               private route: ActivatedRoute,
               private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((x) => this.fromId = +x['id']);
  }
  transfer() {
    if (this.amount !== 0 && this.toId > 0) {
      this.service.transfer({id: 0, ts: 0, from: this.fromId, to: this.toId, volume: this.amount}).subscribe(
        (x) => this.result = x > 0 ? 'fail' : 'success');
    }
  }
  gotoAccounts() {
    const link = ['/accounts'];
    this.router.navigate(link);
  }
  gotoStmt(id: number) {
    const link = ['/statement', id];
    this.router.navigate(link);
  }
}
