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
        width: 85%;
        border: solid 1px;
      }

      .row > div {
        display: inline-block;
        margin: 0 8vw;
      }

      .row > div:nth-child(1) {
        color: red;
      }

      .row > div:nth-child(2) {
        color: green;
      }

      .row > div:nth-child(3) {
        color: blue;
      }

      .row > div:nth-child(4) {
        color: yellow;
      }

  `

  content = `
    <div class="property-history-heading">
        <h1>Property History</h1>
    </div>
    
    <div class="container">
            <div class="row">
                <div class="cell-image">image</div>
                <div class="cell-title">title</div>
                <div class="cell-fee">fee</div>
                <div class="cell-status">status</div>
            </div>
            <div class="row">
                <div class="cell-image">image</div>
                <div class="cell-title">title</div>
                <div class="cell-fee">fee</div>
                <div class="cell-status">status</div>
            </div>
            <div class="row">
                <div class="cell-image">image</div>
                <div class="cell-title">title</div>
                <div class="cell-fee">fee</div>
                <div class="cell-status">status</div>
            </div>
            <div class="row">
                <div class="cell-image">image</div>
                <div class="cell-title">title</div>
                <div class="cell-fee">fee</div>
                <div class="cell-status">status</div>
            </div>
            <div class="row">
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