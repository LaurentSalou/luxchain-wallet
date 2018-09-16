import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AvatarsPage } from './avatars';
import { TranslateModule } from '@ngx-translate/core';
import { AlertProvider } from '../../providers/alert/alert';
import { ClipboardModule } from 'ngx-clipboard/dist';

@NgModule({
  declarations: [
    AvatarsPage,
  ],
  imports: [
    IonicPageModule.forChild(AvatarsPage),
    TranslateModule,
    ClipboardModule
  ],
  providers: [
      AlertProvider
  ],
})
export class AvatarsPageModule {}
