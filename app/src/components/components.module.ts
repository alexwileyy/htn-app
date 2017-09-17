import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { WalletCatgeoryComponent } from './wallet-catgeory/wallet-catgeory';
import { CertificatePopupComponent } from './certificate-popup/certificate-popup-component';
@NgModule({
	declarations: [HeaderComponent,
    WalletCatgeoryComponent,
    CertificatePopupComponent
  ],
	imports: [],
	exports: [HeaderComponent,
    WalletCatgeoryComponent,
    CertificatePopupComponent
  ]
})
export class ComponentsModule {}
