import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { WalletCatgeoryComponent } from './wallet-catgeory/wallet-catgeory';
@NgModule({
	declarations: [HeaderComponent,
    WalletCatgeoryComponent],
	imports: [],
	exports: [HeaderComponent,
    WalletCatgeoryComponent]
})
export class ComponentsModule {}
