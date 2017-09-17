export class certificateHelper{

  private blockState: string;

  constructor(
    private title: string,
    private issuerName: string,
    private recipientName: string,
    private logo: string,
    private dateSigned: string,
    // private data: {
    //   issued: string,
    //   expires: string,
    //   status: string,
    //   number: string
    //   id_image: string
    //
    private data: any
  ){
    this.title = title;
    this.issuerName = issuerName;
    this.logo = logo;
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

  getIcon(){
    return this.logo;
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
