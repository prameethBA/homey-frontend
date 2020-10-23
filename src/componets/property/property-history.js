import Base from './../Base.js'

export default class PaymentHistory extends Base {

  css =  `
 .container {
      position: relative;
      display: inline-block;
      width: 400px;
      height: 300px;
      box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.86);
      margin: 2em;
      background-color: rgba(300,300,300,0.5);

    }
    .heading{
        text-align: center;;
      }

      .property-history-heading h1{
        text-align: center;
        }

      .property-history-heading {
        text-align: center;
        font-size: 2.5em;
      }

      .divTable
      {
          display:inline-table;
          width:100%;
          position:center;
          
          background-color:#eee0;

      }
  
      
  
      .cell-image,.cell-title,.cell-fee,.cell-status
      {
          float:left;
          display:table-column;
          width:200px;
          background-color:#eee0;


             position: relative;
             display: inline-block;
            width: 200px;
            height: 100px;
            box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.86);
            margin: 5px;
      }

      .cell-image
      {
       
      }
      .cell-title
      {
         
      }
      .cell-fee
      {
        
      }
      .cell-status
      {

      }

  `

  content = `
    <div class="property-history-heading">
        <h1>Property History</h1>
    </div>
    
    <div class="divTable">
             
            <div class="divRow">
                <div class="cell-image">image</div>
                <div class="cell-title">title</div>
                <div class="cell-fee">fee</div>
                <div class="cell-status">status</div>
            </div>
            <div class="divRow">
                <div class="cell-image">image</div>
                <div class="cell-title">title</div>
                <div class="cell-fee">fee</div>
                <div class="cell-status">status</div>
            </div>
            <div class="divRow">
                <div class="cell-image">image</div>
                <div class="cell-title">title</div>
                <div class="cell-fee">fee</div>
                <div class="cell-status">status</div>
            </div>
            <div class="divRow">
                <div class="cell-image">image</div>
                <div class="cell-title">title</div>
                <div class="cell-fee">fee</div>
                <div class="cell-status">status</div>
            </div>
            <div class="divRow">
                <div class="cell-image">image</div>
                <div class="cell-title">title</div>
                <div class="cell-fee">fee</div>
                <div class="cell-status">status</div>
            </div>


      </div>
    
    

 
  `
    constructor() {
      super()
      this.mount()
    }
    
  }

  window.customElements.define('property-history', PaymentHistory)