export class certificateHelper{

  private blockState: string;

  constructor(
    private title: string,
    private issuerName: string,
    private recipientName: string,
    private dateSigned: string,
    private data: [{name: string}]
  ){
    this.title = title;
    this.issuerName = issuerName;
    this.recipientName = recipientName;
    this.dateSigned = dateSigned;
    this.data = data;
  }

  /*
    GETTERS
   */

  getTitle(){
      return this.title;
  }

  getIssuerName(){
    return this.issuerName;
  }

  getRecipientName(){
    return this.issuerName;
  }
  getDateSigned(){
    return this.getDateSigned()
  }

  getData(){
    return this.data;
  }

  getBlockState(){
    return this.blockState
  }

  /*
    SETTERS
   */
  setBlockState(state){
    this.blockState = state;
  }
}
