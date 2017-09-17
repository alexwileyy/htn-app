import { Component, Input } from '@angular/core';
import { certificateHelper } from '../../appClasses/certificateHelper';
import { PoupProvider } from '../../providers/poup/poup'

/**
 * Generated class for the WalletCatgeoryComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'wallet-catgeory',
  templateUrl: 'wallet-catgeory.html'
})
export class WalletCatgeoryComponent {

  text: string;

  @Input() category: string;
  @Input() data: any;

  constructor(public popup: PoupProvider) {
    console.log('Hello WalletCatgeoryComponent Component');
    this.text = 'Hello World';
  }

  togglePopup(block){
    this.popup.togglePopup(block);
  }

}
