import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-marketdata',
    templateUrl: './marketdata.component.html',
    styleUrls: ['./marketdata.component.scss'],
    animations: [routerTransition()]
})
export class MarketDataComponent implements OnInit {

    constructor() {  }

    ngOnInit() {
    }

    
}
