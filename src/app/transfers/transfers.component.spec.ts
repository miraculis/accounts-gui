/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TransfersComponent } from './transfers.component';
import {BankingService} from '../banking.service';
import {StatementComponent} from '../statement/statement.component';
import {AccountsComponent} from '../accounts/accounts.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule, XHRBackend} from '@angular/http';
import {MockBackend} from '@angular/http/testing';

describe('TransfersComponent', () => {
  let component: TransfersComponent;
  let fixture: ComponentFixture<TransfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsComponent, StatementComponent, TransfersComponent ],
      imports: [RouterTestingModule.withRoutes([
        { path: '', redirectTo: '/accounts', pathMatch: 'full' },
        { path: 'accounts',  component: AccountsComponent },
        { path: 'statement/:id', component: StatementComponent },
        { path: 'transfer/:id',     component: TransfersComponent }
      ]), FormsModule, HttpModule],
      providers: [BankingService, { provide: XHRBackend, useClass: MockBackend }]})
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
