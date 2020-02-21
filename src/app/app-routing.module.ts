import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StaticComponent } from './static/static.component';
import { MarketComponent } from './market/market.component';
import { TradingComponent } from './trading/trading.component';
import { CustomerComponent } from './static/customer/customer.component';
import { CurrencyComponent } from './static/currency/currency.component';
import { CalendarsComponent } from './static/calendars/calendars.component';
import { BankrelatedComponent } from './static/bankrelated/bankrelated.component';


const routes: Routes = [
  { path: '', component:  LoginComponent},
  { path: 'static', component:  StaticComponent},
  { path: 'market', component:  MarketComponent},
  { path: 'trading', component: TradingComponent},
  { path: 'customer', component:CustomerComponent},
  { path: 'static/customer', component:CustomerComponent},
  { path: 'static/currency', component:CurrencyComponent},
  { path: 'static/calendars', component:CalendarsComponent},
  //{ path: 'static/mainpage', redirectTo:'',pathMatch: 'full'},
  { path: 'static/bankrelated', component:BankrelatedComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
