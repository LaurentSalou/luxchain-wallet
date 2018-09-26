import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MITRegisterPage } from './mit-register';
import { TranslateModule } from '@ngx-translate/core';
import { AlertProvider } from '../../providers/alert/alert';
import { PipesModule } from '../../pipes/pipes.module';
import { Camera } from '@ionic-native/camera';
//import { ImagePicker } from '@ionic-native/image-picker';
//import { Base64 } from '@ionic-native/base64';

@NgModule({
    declarations: [
        MITRegisterPage,
    ],
    providers: [
        AlertProvider,
        Camera,
        //ImagePicker,
        //Base64
    ],
    imports: [
        IonicPageModule.forChild(MITRegisterPage),
        PipesModule,
        TranslateModule
    ],
})
export class MitRegisterPageModule { }
