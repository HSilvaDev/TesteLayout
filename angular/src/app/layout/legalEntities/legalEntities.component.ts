import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-legalentities',
    templateUrl: './legalEntities.component.html',
    styleUrls: ['./legalEntities.component.scss'],
    animations: [routerTransition()]
})
export class LegalEntitiesComponent implements OnInit {

    constructor() {  }

    ngOnInit() {
    }

    
}
