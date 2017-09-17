import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the VerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verification',
  templateUrl: 'verification.html',
})
export class VerificationPage {

  public recipientName: string;
  public title: string;
  public dateSigned: string;
  public status: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.recipientName = this.navParams.get('recipientName');
    this.title  = this.navParams.get('title');
    this.dateSigned = this.navParams.get('dateSigned');
    this.status = this.navParams.get('status');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerificationPage');
  }

}
