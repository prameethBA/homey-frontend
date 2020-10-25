import Base from './../Base.js'

export default class PaymentHistory extends Base {

    css = `
      .container {
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        width:100%;
      }
      
    .heading{
        text-align: center;
      }

      .property-history-heading h1{
        text-align: center;
        }

      .property-history-heading {
        text-align: center;
        font-size: 2.5em;
      }

      
      .row {
        display: block;
        width: 90%;
        height: 80px;
        margin-bottom: 30px;
      }

      .row > div {
        display: inline-block;
        margin: 0 4vw;
      }

      .row > div:nth-child(1) {
        color: red;
        border: solid 2px;
        height: 100px;
        width: 100px;
      }

      .row > div:nth-child(2) {
        color: green;
        border: solid 2px;
        height: 70px;
        width: 200px;
      }

      .row > div:nth-child(3) {
        color: blue;
        border: solid 2px;
        height: 70px;
        width: 160px;
      }

      .row > div:nth-child(4) {
        color: #ff08e1;
        border: solid 2px;
        height: 60px;
        width: 60px;
      }

  `

    content = `
    <div class="property-history-heading">
        <h1>Property History</h1>
    </div>
    
    <div class="container">
    <div class="row">
      <div class="cell-image">
        <img class="img" src="./assets/icon/recived.png">
      </div>
      <div class="cell-title">Recived</div>
      <div class="cell-fee">fee</div>
      <div class="cell-status">status</div>
    </div>
    <div class="row">
        <div class="cell-image">
          <img class="img" src="./assets/icon/expenses-fees.png">
        </div>
        <div class="cell-title">Expences / Fees</div>
        <div class="cell-fee">fee</div>
        <div class="cell-status">status</div>
    </div>
    <div class="row">
        <div class="cell-image">
          <img class="img" src="./assets/icon/failed.png">
        </div>
        <div class="cell-title">Failed</div>
        <div class="cell-fee">fee</div>
        <div class="cell-status">status</div>
    </div>
    <div class="row">
        <div class="cell-image">
          <img class="img" src="./assets/icon/pendings.png">
        </div>
        <div class="cell-title">Pendings</div>
        <div class="cell-fee">fee</div>
        <div class="cell-status">status</div>
    </div>
    <div class="row">
        <div class="cell-image">
          <img class="img" src="./assets/icon/cashouts.png">
        </div>
        <div class="cell-title">Cashouts</div>
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