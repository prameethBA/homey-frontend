import Base from '../Base.js'

export default class AvalibaleProperty extends Base {

    css = `
    `

    content = `
    <div class="container">
    <div>
    `

    constructor() {
        super()
        this.mount()

        import('./subcomp/property-view.js')
            .then(() => {
                this._qs('.container').innerHTML = `
            <property-view id="id-a">
                <img class='thumbnail' slot='thumbnail' src="./assets/img/1.png" />
                <p slot="title" class="title">lorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
                <p slot="price" class="price">Rs.180,000,000</p>
                <p slot="description" class="description">em ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
            </property-view>
            <property-view id="id-b">
                <img class='thumbnail' slot='thumbnail' src="./assets/img/1.png" />
                <p slot="title" class="title">lorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
                <p slot="price">Rs.180,000,000</p>
                <p slot="description" class="description">em ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
            </property-view>
            `
        })

    }//end of constructor

    connectedCallback() {

    }//End of connected callback

}//End of Class

window.customElements.define('available-property', AvalibaleProperty)
