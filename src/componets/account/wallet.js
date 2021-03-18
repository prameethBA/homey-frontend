import Base from '../Base.js'
import CSS from './wallet.css.js'

export default class Wallet extends Base {
    css = CSS

    content = `
    <div class="container">
        <div class="cards">

            <div class="card">
            <div class="card__side card__side--front card__side--front-1">
                <div class="card__description">Properties</div>
            </div>
            <div class="card__side card__side--back card__side--back-1">
                <div class="card__description_2">
                    <button>Own Properties</button>
                    <button>Favourite Properties</button>
                </div>
            </div>
            </div>


            <div class="card">
            <div class="card__side card__side--front card__side--front-2">
                <div class="card__description">Payments</div>
            </div>
            <div class="card__side card__side--back card__side--back-2">
                <div class="card__description_2">
                <button>Revieved Amount</button>
                <button>Paid Amount</button>
                <button>Cash Outs</button>
                <button>Current Balance</button>
                </div>
            </div>
            </div>


            <div class="card">
            <div class="card__side card__side--front card__side--front-3">
                <div class="card__description">Account</div>
            </div>
            <div class="card__side card__side--back card__side--back-3">
                <div class="card__description_2">
                <button>Account Details</button>
                <button>Cash out Accounts</button>
                </div>
            </div>
            </div>

            <div class="card">
            <div class="card__side card__side--front card__side--front-4">
                <div class="card__description">Payment Options</div>
            </div>
            <div class="card__side card__side--back card__side--back-4">
                <div class="card__description_2">
                <button>Payment options</button>
                </div>
            </div>
            </div>

        </div>
    </div>
`
    constructor() {
        super()
        this.mount()
    } //End of constructor
} //End of class

window.customElements.define('wallet-comp', Wallet)
