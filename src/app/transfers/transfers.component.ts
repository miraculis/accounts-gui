import { Component, OnInit } from '@angular/core';
import {BankingService} from '../banking.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Transfer} from '../transfer';

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.css']
})
export class TransfersComponent implements OnInit {

  constructor( private service: BankingService,
               private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
