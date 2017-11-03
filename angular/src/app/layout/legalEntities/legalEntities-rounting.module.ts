import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegalEntitiesComponent } from './legalEntities.component';

const routes: Routes = [
    { path: '', component: LegalEntitiesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LegalEntitiesRoutingModule { }
