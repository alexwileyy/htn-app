import { Component } from '@angular/core';
import { PoupProvider } from '../../providers/poup/poup'

/**
 * Generated class for the CertificateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'certificate-popup',
  templateUrl: 'certificate-popup-component.html'
})
export class CertificatePopupComponent {

  public certificate: any;

  constructor(public popup: PoupProvider) {
    console.log('Hello CertificateComponent Component');
    this.certificate = this.popup.getCertificate();
    console.log(this.certificate);

  }

  getVerificationCode(){
    this.popup.togglePopup(null);
  }

}
