import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {QRScanner, QRScannerStatus} from '@ionic-native/qr-scanner';

import { WalletPage } from '../wallet/wallet';

/**
 * Generated class for the CameraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html',
})
export class CameraPage {
  scanSub;

  constructor(public navCtrl: NavController, public navParams: NavParams, private qrScanner: QRScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CameraPage');

    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          // start scanning
          this.scanSub = this.qrScanner.scan().subscribe(function (text: string) {
            alert('Scanned something' + text);
            this.navCtrl.setRoot(WalletPage);

            // hide camera preview
            this.qrScanner.hide();
            this.scanSub.unsubscribe(); // stop scanning

          }.bind(this));

          this.qrScanner.useBackCamera();
          this.qrScanner.show();
          this.qrScanner.resumePreview();
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
          alert('Permissions permanently denied');
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          alert('Permissions denied');
        }
      })
      .catch((e: any) => alert('Overall error ' + e.toString()));

  }

  ionViewWillLeave() {
    this.scanSub.unsubscribe();
    this.qrScanner.pausePreview();
    this.qrScanner.hide();
  }

}
