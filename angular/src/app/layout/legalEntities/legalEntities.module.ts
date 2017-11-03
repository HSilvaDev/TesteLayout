import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


import { LegalEntitiesRoutingModule } from './legalEntities-rounting.module';
import { LegalEntitiesComponent } from './legalEntities.component';

import { StatModule } from '../../shared';
import { DevExtremeModule,DxButtonModule} from 'devextreme-angular';
import {BrowserModule} from '@angular/platform-browser'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'


@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        LegalEntitiesRoutingModule,
        StatModule,
        DevExtremeModule,
        BrowserModule
    ],
    declarations: [
        LegalEntitiesComponent,
        
    ]

})
export class LegalEntitiesModule { 

    
}
