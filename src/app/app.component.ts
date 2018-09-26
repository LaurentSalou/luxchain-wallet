import { Component, ViewChild } from '@angular/core'
import { Nav, Platform, Events } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { TranslateService } from '@ngx-translate/core'
import { StatusBar } from '@ionic-native/status-bar'
import { Keyboard } from '@ionic-native/keyboard'
import { AppGlobals } from './app.global'
import { Storage } from '@ionic/storage'
import { PluginProvider } from '../providers/plugin/plugin'
import { AlertProvider } from '../providers/alert/alert'
import { MvsServiceProvider } from '../providers/mvs-service/mvs-service'

@Component({
    templateUrl: 'app.html'
})
export class MyETPWallet {
    @ViewChild(Nav) nav: Nav;

    rootPage: any
    pages: Array<{ title: string, component: any }> = [];

    constructor(
        private splashScreen: SplashScreen,
        public platform: Platform,
        private storage: Storage,
        private plugins: PluginProvider,
        public translate: TranslateService,
        private event: Events,
        private globals: AppGlobals,
        public statusBar: StatusBar,
        public keyboard: Keyboard,
        private alert: AlertProvider,
        private mvs: MvsServiceProvider
    ) {

        this.initializeApp()
            .then(() => this.storage.get('network'))
            .then((network) => this.initNetwork(network))
            .then(() => this.storage.get('language'))
            .then((language) => this.initLanguage(language))
            .then(() => this.isLoggedIn())
            .then((loggedin) => {
                if (loggedin) {
                    this.rootPage = "AccountPage"
                } else {
                    this.rootPage = "LoginPage"
                }
                return;
            })
            .then(() => this.keyboard.hideKeyboardAccessoryBar(false))
            .then(() => this.splashScreen.hide())
            .catch((e) => console.error(e));

        this.setTheme();
        this.event.subscribe("theme_changed", (theme) => {
            this.storage.set('theme', theme)
                .then(() => this.setTheme())
        });

        this.event.subscribe("settings_update", () => {
            this.setMenu()
                .then((menu: any) => {
                    this.pages = menu
                    return;
                })
        });
    }

    isLoggedIn(): any {
        return this.storage.get('mvs_addresses')
            .then((addresses) => (addresses != undefined && addresses != null && Array.isArray(addresses) && addresses.length))

    }

    setMenu = () => {
        return this.isLoggedIn()
            .then((loggedin) => {
                if (loggedin)
                    return this.setPrivateMenu()
                else
                    return this.setPublicMenu()
            })
    }

    setTheme() {
        this.storage.get('theme')
            .then((theme) => {
                document.getElementById('theme').className = 'theme-' + ((theme) ? theme : 'default');
            })
    }

    initNetwork(network) {
        this.globals.network = (network) ? network : 'mainnet'
    }

    initLanguage(language: string) {
        this.translate.setDefaultLang('en');
        this.translate.use((language) ? language : 'en');
        this.event.publish('settings_update', (language) ? language : 'en');
        this.storage.set('language', (language) ? language : 'en');
        return
    }


    setPublicMenu() {
        return Promise.all([
            { title: 'LOGIN', component: "LoginPage", icon: 'wallet', root: true },
            { title: 'LANGUAGE_SETTINGS', component: "LanguageSwitcherPage", icon: 'wallet' },
        ].map((entry) => this.addToMenu(entry)))
    }

    setPrivateMenu() {
        return this.plugins.getPlugins()
            .then(plugins => {
                let p = []
                plugins.forEach(plugin => {
                    p.push({
                        title: (plugin.translation[this.translate.currentLang])?plugin.translation[this.translate.currentLang].name:plugin.translation.default.name, component: "PluginPage", params: { name: plugin.name }, icon: 'cube'
                    })
                })
                return p
            })
            .then(plugins => {
                return Promise.all([
                    { title: 'ACCOUNT.TITLE', component: "AccountPage", icon: 'portfolio', root: true },
                    { title: 'DIGITAL_ID', component: "AvatarsPage", icon: 'digital_id' },
                    { title: 'DIGITAL_ASSET', component: "DigitalAssetPage", icon: 'digital_asset' },
                    { title: 'LANGUAGE_SETTINGS', component: "LanguageSwitcherPage", icon: 'language' },
                    { title: 'SETTINGS', component: "SettingsPage", icon: 'settings' },
                    { title: 'LOGOUT', component: "Logout", icon: 'logout' }
                ].concat(plugins).map((entry) => this.addToMenu(entry)))
            });
    }

    private addToMenu(menu_entry) {
        return new Promise((resolve, reject) => {
            this.translate.get(menu_entry.title).subscribe((lang) => {
                menu_entry.caption = lang;
                resolve(menu_entry)
            })
        })
    }

    initializeApp() {
        return this.platform.ready()
    }

    openPage(page) {
        if (page.component) {
            if (page.root)
                this.nav.setRoot(page.component);
            else if (page.component == "Logout")
                this.logout()
            else
                this.nav.push(page.component, page.params);
        }
        else if (page.newtab)
            if (this.platform.is('mobile') && this.platform.is('ios'))
                window.open(page.newtab, '_self');
            else
                window.open(page.newtab, '_blank');


    }

    logout() {
        console.log("Trying to logout")
        this.alert.showLogout(() => this.mvs.hardReset()
            .then(() => this.nav.setRoot("LoginPage"))
        )
    }
}
