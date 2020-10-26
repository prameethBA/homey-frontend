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
        display: flex;
        width: 90%;
        height: 80px;
        
      }

      .row > div {
        text-align: center;
      font-size: 25px;
        display: inline-block;
        margin: 0 6vw;
      }

      .row > div:nth-child(1) {
        color: red;
        height: 80px;
        width: 100px;
      }

      .row > div:nth-child(2) {
        color: green;
        position: relative;
        top: 1em;
        height: 80px;
        width: 200px;
      }

      .row > div:nth-child(3) {
        color: blue;
        position: relative;
        top: 1em;
        height: 80px;
        width: 160px;
      }

      .row > div:nth-child(4) {
        color: #ff08e1;
        position: relative;
        top: 1em;
        height: 80px;
        width: 220px;
      }
      
      select {
        width: 65%;
        padding: 15px 30px;
        border: none;
        border-radius: 14px;
        color: white;
        background-color: #8842d5; 
      }
  `

    content = `
    <div class="property-history-heading">
        <h1>Property History</h1>
    </div>
    
    <div class="container">
    <div class="row">
      <div class="cell-image">
        <img class="img" src="./assets/icon/money.png">
      </div>
      <div class="cell-title">Recived</div>
      <div class="cell-fee">LKR 5,356,543.00</div>
      <div class="cell-status">
        <select name="status" id="status">
          <option value="state-1">DONE</option>
          <option value="state-2">TO-DO</option>
        </select>
      </div>
    </div>
    <div class="row">
        <div class="cell-image">
          <img class="img" src="./assets/icon/money.png">
        </div>
        <div class="cell-title"><span id="table-txt">Expences / Fees</span></div>
        <div class="cell-fee">LKR 5,356,543.00</div>
        <div class="cell-status">
          <select name="status" id="status">
          <option value="state-1">DONE</option>
          <option value="state-2">TO-DO</option>
        </select>
        </div>
    </div>
    <div class="row">
        <div class="cell-image">
          <img class="img" src="./assets/icon/money.png">
        </div>
        <div class="cell-title">Failed</div>
        <div class="cell-fee">LKR 5,356,543.00</div>
        <div class="cell-status">
          <select name="status" id="status">
          <option value="state-1">DONE</option>
          <option value="state-2">TO-DO</option>
        </select>
        </div>
    </div>
    <div class="row">
        <div class="cell-image">
          <img class="img" src="./assets/icon/money.png">
        </div>
        <div class="cell-title">Pendings</div>
        <div class="cell-fee">LKR 5,356,543.00</div>
        <div class="cell-status">
          <select name="status" id="status">
          <option value="state-1">DONE</option>
          <option value="state-2">TO-DO</option>
        </select>
        </div>
    </div>
    <div class="row">
        <div class="cell-image">
          <img class="img" src="./assets/icon/money.png">
        </div>
        <div class="cell-title">Cashouts</div>
        <div class="cell-fee">LKR 5,356,543.00</div>
        <div class="cell-status">
          <select name="status" id="status">
          <option value="state-1">DONE</option>
          <option value="state-2">TO-DO</option>
        </select>
        </div>
    </div>
  </div>
    
    

 
  `
    constructor() {
        super()
        this.mount()
    }

}

window.customElements.define('property-history', PaymentHistory)