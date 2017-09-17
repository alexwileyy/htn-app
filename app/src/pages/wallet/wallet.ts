import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { certificateHelper } from '../../appClasses/certificateHelper';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    for(let i = 0; i <= 3; i++){
      let wallet = new certificateHelper(
        'Certificate',
        'AQA',
        'Alex Wiley',
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
  }

}
