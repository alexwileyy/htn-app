import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { WalletCatgeoryComponent } from './wallet-catgeory/wallet-catgeory';
import { CertificatePopupComponent } from './certificate-popup/certificate-popup-component';
import { CertificateBoxComponent } from './certificate-box/certificate-box';
@NgModule({
	declarations: [HeaderComponent,
    WalletCatgeoryComponent,
    CertificatePopupComponent,
    CertificateBoxComponent
  ],
	imports: [],
	exports: [HeaderComponent,
    WalletCatgeoryComponent,
    CertificatePopupComponent,
    CertificateBoxComponent
  ]
})
export class ComponentsModule {}
