import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the PoupProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PoupProvider {

  public showPoup: boolean = false;

  private certificate: any;

  constructor() {
    console.log('Hello PoupProvider Provider');
  }

  togglePopup(block){
    if(this.showPoup){
      this.showPoup = false;
    } else{
      this.showPoup = true;
    }
    this.certificate = block;
    console.log(this.showPoup)
  }

  setState(state){
    this.showPoup = state;
  }

  getPopupStatus(){
    return this.showPoup;
  }

  getCertificate(){
    return this.certificate;
  }

}
