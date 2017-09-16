import { Component } from '@angular/core';

import { WalletPage } from '../wallet/wallet';
import { CameraPage } from '../camera/camera';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  public wallet = WalletPage;
  public camera = CameraPage;

  constructor() {

  }
}
