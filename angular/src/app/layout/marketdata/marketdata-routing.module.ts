import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarketDataComponent } from './marketdata.component';

const routes: Routes = [
    { path: '', component: MarketDataComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketDataRoutingModule { }
