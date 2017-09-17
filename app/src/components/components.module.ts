import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { WalletCatgeoryComponent } from './wallet-catgeory/wallet-catgeory';
import { CertificateComponent } from './certificate-popup/certificate';
@NgModule({
	declarations: [HeaderComponent,
    WalletCatgeoryComponent,
    CertificateComponent],
	imports: [],
	exports: [HeaderComponent,
    WalletCatgeoryComponent,
    CertificateComponent]
})
export class ComponentsModule {}
