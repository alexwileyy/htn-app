import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { WalletPage } from '../pages/wallet/wallet';
import { CameraPage } from '../pages/camera/camera';

/*
  Components
 */
import { HeaderComponent } from '../components/header/header';
import { WalletCatgeoryComponent } from '../components/wallet-catgeory/wallet-catgeory';
import { CertificatePopupComponent } from '../components/certificate-popup/certificate-popup-component';
import { CertificateBoxComponent } from '../components/certificate-box/certificate-box';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PoupProvider } from '../providers/poup/poup'

import { QRScanner } from '@ionic-native/qr-scanner';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    WalletPage,
    CameraPage,
    HeaderComponent,
    WalletCatgeoryComponent,
    CertificatePopupComponent,
    CertificateBoxComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    WalletPage,
    CameraPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QRScanner,
    PoupProvider
  ]
})
export class AppModule {}
