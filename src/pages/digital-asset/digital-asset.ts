import { Component } from '@angular/core';
import { IonicPage, NavController, Platform, Events } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { AlertProvider } from '../../providers/alert/alert';
import { MvsServiceProvider } from '../../providers/mvs-service/mvs-service';
import { WalletServiceProvider } from '../../providers/wallet-service/wallet-service';

class Ticker {
    market_cap: number
    percent_change_1h: number
    percent_change_7d: number
    percent_change_24h: number
    price: number
    volume_24h: number
}

class BaseTickers {
    BTC: Ticker
    USD: Ticker
    CNY: Ticker
    EUR: Ticker
    JPY: Ticker
}

@IonicPage()
@Component({
    selector: 'page-digital-asset',
    templateUrl: 'digital-asset.html'
})
export class DigitalAssetPage {

    syncing = false
    syncingSmall = false
    offline = false
    balances: any
    height: number
    loading: boolean
    balancesKeys: any
    theme: string
    icons: any = []
    tickers = {}
    base : string
    domains: any = []
    avatars: Array<any>;
    no_avatar: boolean = true;

    private syncinterval: any;

    constructor(public nav: NavController, public translate: TranslateService, private wallet: WalletServiceProvider, private mvs: MvsServiceProvider, private alert: AlertProvider, public platform: Platform, private event: Events) {
        this.loading = true;

        //Reset last update time
        var lastupdate = new Date()
        lastupdate.setDate(0)
        this.mvs.setUpdateTime(lastupdate)

        this.theme = document.getElementById('theme').className
        this.event.subscribe("theme_changed", (theme) => {
            this.theme = ('theme-' + theme)
        });
    }

    isOffline = () => !this.syncingSmall && this.offline
    isSyncing = () => this.syncingSmall

    ionViewDidEnter() {

        this.mvs.getBaseCurrency()
            .then(base=>{
                this.base=base;
                return this.mvs.getTickers()
                    .then(tickers => {
                        Object.keys(tickers).forEach((symbol) => {
                            let ticker : BaseTickers = tickers[symbol];
                            this.tickers[symbol]=ticker;
                        })
                    })
            })

        this.mvs.getAddresses()
            .then((addresses) => {
                if (Array.isArray(addresses) && addresses.length)
                    this.showBalances()
                else
                    this.nav.setRoot("LoginPage")
            })

        this.loadAvatars()
            .catch(console.error);
    }

    ionViewWillLeave = () => clearInterval(this.syncinterval)

    logout = () => this.alert.showLogout(() => this.mvs.hardReset()
        .then(() => this.nav.setRoot("LoginPage"))
    )

    create(){
        if(this.no_avatar) {
            this.alert.createAssetNoDid()
        } else {
            this.nav.push("MITRegisterPage")
        }
    }

    private showBalances() {
        return this.mvs.getBalances()
            .then((_) => {
                this.balances = _
                console.log(_)
                return Promise.all(Object.keys(_.MST).map((symbol) => this.mvs.addAssetToAssetOrder(symbol)))
            })
            .then(() => this.mvs.assetOrder())
            .then((order) => {
                this.loading = false
                this.balancesKeys = order
                return order
            })
            .then((balances) => {
                let iconsList = this.wallet.getMstIcons()
                balances.map((symbol) => {
                    this.icons[symbol] = iconsList.indexOf(symbol) !== -1 ? symbol : 'default_mst'
                    this.domains[symbol] = symbol.split('.')[0]
                })
            })
            .catch((e) => {
                console.error(e)
                console.log("Can't load balances")
            })
    }

    loadAvatars(){
        return this.mvs.listAvatars()
            .then((avatars) => {
                this.avatars = avatars;
                if(this.avatars && this.avatars.length != 0) {
                    this.no_avatar = false;
                }
            })
    }

}
