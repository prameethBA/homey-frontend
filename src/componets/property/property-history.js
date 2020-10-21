import Base from './../Base.js'

export default class PaymentHistory extends Base {

  css =  `
    .container {
      position: relative;
      display: inline-block;
      width: 300px;
      height: 100px;
      box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.86);
      margin: 2px;
      background-color: rgba(300,300,300,0.5);
    }

    .heading{
    text-align: center;
    }

  .property-history-heading {
        
    }

  .heading{
    font-size:1.5em;
    }

  .table {
    margin: 0 auto;
    padding: 50%;
    width: 50%;
    padding:10%;
    margin-top:7px;
    }

  th, td {
    text-align: left;
    padding: 8px;
    }
  
  tr:nth-child(even){background-color: #f2f2f2}
  
  th {
    background-color: #4CAF50;
    color: white;
  }

  table.payment-his {
     
  }
  table {
    
    }
  

  `

  content = `
    <div class="property-history-heading">
        <h1>Property History</h1>
    </div>
    <div class="table">
        <table class=payment-his>
            <tr>
                <td>
                    <div class="container">
                    </div>
                </td>
                <td>Griffin</td>
                <td>$100</td>
            </tr>
            <tr>
                <td>
                    <div class="container">
                    </div>
                </td>
                <td>Griffin</td>
                <td>$100</td>
            </tr>
            <tr>
                <td>
                    <div class="container">
                    </div>
                </td>
                <td>Griffin</td>
                <td>$100</td>
            </tr>
            <tr>
                <td>
                    <div class="container">
                    </div>
                </td>
                <td>Griffin</td>
                <td>$150</td>
            </tr>
            <tr>
                <td>
                    <div class="container">
                    </div>
                </td>
                <td>Swanson</td>
                <td>$300</td>
            </tr>
            <tr>
                <td>
                    <div class="container">
                    </div>
                </td>
                <td>Brown</td>
                <td>$250</td>
            </tr>
        </table>
    </div>

 
  `
    constructor() {
      super()
      this.mount()
    }
    
  }

  window.customElements.define('property-history', PaymentHistory)