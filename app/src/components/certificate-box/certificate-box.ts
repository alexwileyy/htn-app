import { Component, Input } from '@angular/core';
import { PoupProvider } from '../../providers/poup/poup'

/**
 * Generated class for the CertificateBoxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'certificate-box',
  templateUrl: 'certificate-box.html'
})
export class CertificateBoxComponent {

  @Input() title:string;
  @Input() name:string;
  @Input() date: string;
  @Input() type: string;
  @Input() status: string;

  public statusMessage: string;

  public certificate: any;

  constructor(public popup: PoupProvider) {
    console.log('Hello CertificateBoxComponent Component');
    this.certificate = this.popup.getCertificate();
    // console.log('Status: ' + this.status);
    // if(this.status == 'passed'){
    //   this.statusMessage = 'Verification Passed';
    // }
    // else if(this.status == 'failed'){
    //   this.statusMessage = 'Verification Failed';
    // }
  }

  ngOnInit(){
    console.log('Status: ' + this.status);
    if(this.status == 'passed'){
      this.statusMessage = 'Verification Passed';
    }
    else if(this.status == 'failed'){
      this.statusMessage = 'Verification Failed';
    }
  }

  getVerificationCode(){
    this.popup.togglePopup(null);
  }

}
