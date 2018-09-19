import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'digital-asset-card',
    templateUrl: 'digital-asset-card.html'
})
export class DigitalAssetCardComponent {

    @Input() info: any;
    @Input() owner: string;
    @Input() symbol: string;

    constructor(
        private nav: NavController
    ) {}

    MITTransfer = () => this.nav.push("MITTransferPage", { symbol: this.symbol, owner: this.owner })

    MITDetails = () => this.nav.push("MITDetailsPage", { symbol: this.symbol })
    errorImg = e => e.target.remove()
}
