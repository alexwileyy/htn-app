import { Component } from '@angular/core';

/**
 * Generated class for the CertificateComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'certificate-popup',
  templateUrl: 'certificate.html'
})
export class CertificateComponent {

  text: string;

  constructor() {
    console.log('Hello CertificateComponent Component');
    this.text = 'Hello World';
  }

}
