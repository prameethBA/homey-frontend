import Base from "./../Base.js";
import CSS from "./property-history.css.js";

export default class PropertyHistory extends Base {
  css = CSS;

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
    
    

 
  `;
  constructor() {
    super();
    this.mount();
  }
}

const elementName = "property-history";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, PropertyHistory)
  : null;
