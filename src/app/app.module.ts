import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AccountsComponent } from './accounts/accounts.component';
import { StatementComponent } from './statement/statement.component';
import { TransfersComponent } from './transfers/transfers.component';
import {BankingService} from './banking.service';
import {AppRoutingModule} from './app-routing.module';
import 'rxjs/add/operator/map';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AccountsComponent,
    StatementComponent,
    TransfersComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BankingService],
  bootstrap: [MainComponent]
})
export class AppModule {
  constructor() {}
}
