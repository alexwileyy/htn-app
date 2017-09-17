import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { certificateHelper } from '../../appClasses/certificateHelper';
import { PoupProvider } from '../../providers/poup/poup';
/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {

  public walletData: any = new Array();

  public showPopup: any = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public popup: PoupProvider) {
    for(let i = 0; i <= 3; i++){
      let wallet = new certificateHelper(
        'Certificate',
        'AQA',
        'Alex Wiley',
        '01-SEP-17',
        [{
          name: 'hello'
        }]
      );
      wallet.setBlockState('active');
      this.walletData.push(
        wallet
      )
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
    this.popup.setState(false);
    this.showPopup = this.popup.getPopupStatus();
  }

}
