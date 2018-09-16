import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DigitalAssetPage } from './digital-asset'
import { TranslateModule} from '@ngx-translate/core';
import { DigitalAssetCardComponent } from '../../components/digital-asset-card/digital-asset-card';
import { AlertProvider } from '../../providers/alert/alert';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
    declarations: [
        DigitalAssetPage,
        DigitalAssetCardComponent
    ],
    imports: [
        IonicPageModule.forChild(DigitalAssetPage),
        PipesModule,
        TranslateModule,
    ],
    providers:[
        AlertProvider
    ],
    exports: [
        DigitalAssetPage
    ]
})
export class DigitalAssetPageModule { }
