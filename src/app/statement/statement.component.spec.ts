/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StatementComponent } from './statement.component';
import {TransfersComponent} from '../transfers/transfers.component';
import {AccountsComponent} from '../accounts/accounts.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BankingService} from '../banking.service';
import {FormsModule} from '@angular/forms';

describe('StatementComponent', () => {
  let component: StatementComponent;
  let fixture: ComponentFixture<StatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsComponent, StatementComponent, TransfersComponent ],
      imports: [RouterTestingModule.withRoutes([
        { path: '', redirectTo: '/accounts', pathMatch: 'full' },
        { path: 'accounts',  component: AccountsComponent },
        { path: 'statement/:id', component: StatementComponent },
        { path: 'transfer/:id',     component: TransfersComponent }
      ]), FormsModule],
      providers: [BankingService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.transfers.subscribe((x) => expect(x.length).toBeGreaterThan(1));
  });
});
