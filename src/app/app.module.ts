import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { UsersService } from './service/users.service';
import { LoginComponent } from './login/login.component';
import { 
  MatTableModule, 
  MatDialogModule, 
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatExpansionModule,
  MatOptionModule,
  MatSelectModule,
  MatIconModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatRadioModule,
} from '@angular/material';
import { StaticComponent } from './static/static.component';
import { MarketComponent } from './market/market.component';
import { TradingComponent } from './trading/trading.component';
import { CustomerComponent } from './static/customer/customer.component';
import { CurrencyComponent } from './static/currency/currency.component';
import { CalendarsComponent } from './static/calendars/calendars.component';
import { BankrelatedComponent } from './static/bankrelated/bankrelated.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StaticComponent,
    MarketComponent,
    TradingComponent,
    CustomerComponent,
    CurrencyComponent,
    CalendarsComponent,
    DialogBoxComponent,
    BankrelatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule, 
    MatDialogModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatExpansionModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatRadioModule
  ],
  entryComponents: [
    DialogBoxComponent
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
