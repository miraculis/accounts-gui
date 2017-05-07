/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AccountsComponent } from './accounts.component';
import {BankingService} from '../banking.service';
import {RouterTestingModule} from '@angular/router/testing';
import {TransfersComponent} from '../transfers/transfers.component';
import {StatementComponent} from '../statement/statement.component';

describe('AccountsComponent', () => {
  let component: AccountsComponent;
  let fixture: ComponentFixture<AccountsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsComponent, StatementComponent, TransfersComponent ],
      imports: [RouterTestingModule.withRoutes([
        { path: '', redirectTo: '/accounts', pathMatch: 'full' },
        { path: 'accounts',  component: AccountsComponent },
        { path: 'statement/:id', component: StatementComponent },
        { path: 'transfer/:id',     component: TransfersComponent }
      ])],
      providers: [BankingService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.accounts.subscribe((x) => expect(x.length).toBe(0));
  });
});
