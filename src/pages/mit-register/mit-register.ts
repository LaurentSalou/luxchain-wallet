import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform, Loading } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';
import { AlertProvider } from '../../providers/alert/alert';
import { MvsServiceProvider } from '../../providers/mvs-service/mvs-service';
import { AppGlobals } from '../../app/app.global';
import { WalletServiceProvider } from '../../providers/wallet-service/wallet-service';

@IonicPage()
@Component({
    selector: 'page-mit-register',
    templateUrl: 'mit-register.html',
})
export class MITRegisterPage {


    symbol: string = ""
    passphrase: string = ""
    recipient_address: string = ""
    recipient_avatar: string = ""
    content: string = ""        //content set on the blockchain, in the MITs
    info: any = {}              //info stored in the cache and sent to the server
    loading: Loading
    addressbalances: Array<any>
    avatars: Array<any>;
    no_avatar: boolean = false;
    no_avatar_placeholder: string
    list_all_mits: Array<string> = [];
    fee: number = 10000

    bags_info: any = {};
    brand: any = {};
    model: any = {};
    material: any = {};
    country: any = {};
    color: any = {};
    condition: any = {};
    selectedBrand: any = {};
    selectedModel: any = {};
    selectedMaterial: any = {};
    selectedCountry: any = {};
    selectedColor: any = {};
    selectedCondition: any = {};
    models: any = {};
    modelId: number;
    materialId: string;
    countryId: string;
    serialNumber: number;
    colorId: string;
    conditionId: string;
    price: number;
    confirmation: boolean = false;


    constructor(
        public navCtrl: NavController,
        private alertCtrl: AlertController,
        private alert: AlertProvider,
        public platform: Platform,
        public navParams: NavParams,
        private translate: TranslateService,
        private mvs: MvsServiceProvider,
        private globals: AppGlobals,
        private wallet: WalletServiceProvider) {

        this.recipient_avatar = this.navParams.get('avatar_name')
        this.recipient_address = this.navParams.get('avatar_address')
        if(!this.recipient_address) {
            this.translate.get('MIT_REGISTER.SELECT_AVATAR').subscribe((message: string) => {
                this.recipient_address = message
            })
        }
        this.translate.get('ISSUE.NO_AVATAR_PLACEHOLDER').subscribe((message: string) => {
            this.no_avatar_placeholder = message
        })

        Promise.all([this.mvs.getAddressBalances(), this.mvs.listAvatars()])
            .then((results) => {
                this.avatars = results[1]
                if(this.avatars.length === 0) {
                    this.no_avatar = true;
                }
                let addressbalances = results[0]
                let addrblncs = []
                if (Object.keys(addressbalances).length) {
                    Object.keys(addressbalances).forEach((address) => {
                        if (addressbalances[address].ETP && addressbalances[address].ETP.available >= 10000) {
                            addrblncs.push({ "address": address, "available": addressbalances[address].ETP.available })
                            this.avatars.forEach((avatar) => {
                                if (avatar.address == address)
                                    addrblncs.pop();
                            })
                        }
                    })
                }
                this.addressbalances = addrblncs
            })

        this.wallet.getAssetsParameters()
            .subscribe((data) => this.bags_info = data.json());

    }

    ionViewDidLoad() {
        this.loadMits()
            .catch(console.error);
    }

    cancel() {
        this.navCtrl.pop();
    }

    validPassword = (passphrase) => (passphrase.length > 7)

    validSymbol = (symbol) => /^[A-Za-z0-9._\-]{3,64}$/g.test(symbol) && this.list_all_mits.indexOf(symbol) == -1

    validContent = (content) => content == undefined || content.length<253

    validName = (recipient_avatar) => (recipient_avatar !== undefined && recipient_avatar.length > 0)

    validAddress = (recipient_address) => (recipient_address !== undefined && recipient_address.length > 0)

    create() {
        return this.alert.showLoading()
            .then(() => this.mvs.createRegisterMITTx(
                this.passphrase,
                this.avatars[0].address,
                this.avatars[0].symbol,
                this.symbol,
                this.content,
                undefined,
                this.fee)
            )
            .then(tx => this.mvs.send(tx))
            .then((result) => {
                this.wallet.postAssetInfo(this.info)
                    .subscribe((result) => console.log(result));
                this.wallet.addDigitalAsset(this.symbol, this.info)
                this.navCtrl.pop()
                this.navCtrl.pop()
                this.translate.get('SUCCESS_CREATE_ASSET_TITLE').subscribe((title: string) => {
                    this.translate.get('SUCCESS_CREATE_ASSET_BODY').subscribe((message: string) => {
                        this.alert.showText(title, message)
                    })
                })
            })
            .catch((error) => {
                console.error(error)
                this.loading.dismiss()
                switch (error.message) {
                    case 'ERR_CONNECTION':
                        this.alert.showError('ERROR_SEND_TEXT', '')
                        break;
                    case 'ERR_BROADCAST':
                        this.translate.get('MESSAGE.ONE_TX_PER_BLOCK').subscribe((message: string) => {
                            this.alert.showError('MESSAGE.BROADCAST_ERROR', message)
                        })
                        break;
                    case "ERR_DECRYPT_WALLET":
                        this.alert.showError('MESSAGE.PASSWORD_WRONG', '')
                        break;
                    case "ERR_INSUFFICIENT_BALANCE":
                        this.alert.showError('MESSAGE.INSUFFICIENT_BALANCE', '')
                        break;
                    default:
                        this.alert.showError('MESSAGE.CREATE_TRANSACTION', error.message)
                }
            })
    }

    showSent(text, hash) {
        this.translate.get('MESSAGE.SUCCESS').subscribe((title: string) => {
            this.translate.get('OK').subscribe((ok: string) => {
                let alert = this.alertCtrl.create({
                    title: title,
                    subTitle: text + hash,
                    buttons: [ok]
                })
                alert.present(prompt)
            })
        })
    }

    showAlert(text) {
        this.translate.get('MESSAGE.ERROR_TITLE').subscribe((title: string) => {
            this.translate.get('OK').subscribe((ok: string) => {
                let alert = this.alertCtrl.create({
                    title: title,
                    subTitle: text,
                    buttons: [ok]
                })
                alert.present(prompt)
            })
        })
    }

    showError(message_key, error) {
        this.translate.get(['MESSAGE.ERROR_TITLE', message_key, 'OK']).subscribe((translations: any) => {
            let alert = this.alertCtrl.create({
                title: translations['MESSAGE.ERROR_TITLE'],
                subTitle: translations[message_key],
                message: error,
                buttons: [{
                    text: translations['OK']
                }]
            });
            alert.present(alert);
        })
    }

    loadMits(){
        return this.mvs.getListMit()
            .then((mits) => {
                mits.result.forEach((mit) => {
                    this.list_all_mits.push(mit.attachment.symbol)
                })
            })
            .catch((error) => {
                console.error(error)
            })
    }

    avatarChanged = () => {
        this.avatars.forEach((avatar) => {
            if(avatar.symbol == this.recipient_avatar) {
                this.recipient_address = avatar.address
                return
            }
        })
    }

    onBrandChange(brandId) {
        this.bags_info.brand.forEach((brand) => {
            if(brand.id == brandId) {
                this.selectedBrand = brand;
                this.models = brand.models;
            }
        })
    }

    onModelChange(modelId) {
        this.models.forEach((model) => {
            if(model.id == modelId) {
                this.selectedModel = model;
            }
        })
    }

    onMaterialChange(materialId) {
        this.bags_info.material.forEach((material) => {
            if(material.id == materialId) {
                this.selectedMaterial = material;
            }
        })
    }

    onCountryChange(countryId) {
        this.bags_info.countries.forEach((country) => {
            if(country.id == countryId) {
                this.selectedCountry = country;
            }
        })
    }

    onColorChange(colorId) {
        this.bags_info.color.forEach((color) => {
            if(color.id == colorId) {
                this.selectedColor = color;
            }
        })
    }

    onConditionChange(conditionId) {
        this.bags_info.condition.forEach((condition) => {
            if(condition.id == conditionId) {
                this.selectedCondition = condition;
            }
        })
    }

    confirm () {
        //symbol and content used in the MIT, on the blockchain
        let content = {
            "brand": this.selectedBrand.name,
            "model": this.selectedModel.name,
            "material": this.selectedMaterial.name,
            "country": this.selectedCountry.name,
            "serial_number": this.serialNumber,
            "color": this.selectedColor.name
        }
        this.content = JSON.stringify(content)
        let timestamp = new Date().getTime();
        this.symbol = "LUXCHAIN." + timestamp;

        //info saved in the cache and sent to the server
        this.info['hash'] = this.symbol
        this.info['brand'] = this.selectedBrand.name
        this.info['brand_id'] = this.selectedBrand.id
        this.info['model'] = this.selectedModel.name
        this.info['model_id'] = this.selectedModel.id
        this.info['material'] = this.selectedMaterial.name
        this.info['material_id'] = this.selectedMaterial.id
        this.info['country'] = this.selectedCountry.name
        this.info['country_id'] = this.selectedCountry.id
        this.info['serial_number'] = this.serialNumber
        this.info['color'] = this.selectedColor.name
        this.info['color_id'] = this.selectedColor.id
        this.info['condition'] = this.selectedCondition.name
        this.info['condition_id'] = this.selectedCondition.id
        this.info['price'] = this.price
        this.info['image'] = []

        this.confirmation = true;
    }

}
