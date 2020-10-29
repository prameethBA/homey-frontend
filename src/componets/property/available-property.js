import Base from '../Base.js'

export default class AvalibaleProperty extends Base {

    css = `
    .container {
       display: grid;
       justify-content: center;
       grid-gap: 10px;
       grid-template-columns: repeat(auto-fill, 20rem);
       overflow-x: auto;
    }

    .container::-webkit-scrollbar {
        height: 0;
    }

    property-view {
        display: inline-block;
    }

    @media screen and (max-width: 1200px) {

    }

    @media screen and (max-width: 992px) {

    }

    @media screen and (max-width: 768px) {

    }

    @media screen and (max-width: 512px) {
        .container {
            display: flex;
            overflow: scroll;
        }
    }

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
            <property-view id="id-b">
                <img class='thumbnail' slot='thumbnail' src="./assets/img/1.png" />
                <p slot="title" class="title">lorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
                <p slot="price">Rs.180,000,000</p>
                <p slot="description" class="description">em ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
            </property-view>
            <property-view id="id-b">
                <img class='thumbnail' slot='thumbnail' src="./assets/img/1.png" />
                <p slot="title" class="title">lorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
                <p slot="price">Rs.180,000,000</p>
                <p slot="description" class="description">em ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
            </property-view>
            <property-view id="id-b">
                <img class='thumbnail' slot='thumbnail' src="./assets/img/1.png" />
                <p slot="title" class="title">lorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
                <p slot="price">Rs.180,000,000</p>
                <p slot="description" class="description">em ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
            </property-view>
            <property-view id="id-b">
                <img class='thumbnail' slot='thumbnail' src="./assets/img/1.png" />
                <p slot="title" class="title">lorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
                <p slot="price">Rs.180,000,000</p>
                <p slot="description" class="description">em ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
            </property-view>
            <property-view id="id-b">
                <img class='thumbnail' slot='thumbnail' src="./assets/img/1.png" />
                <p slot="title" class="title">lorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
                <p slot="price">Rs.180,000,000</p>
                <p slot="description" class="description">em ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
            </property-view>
            <property-view id="id-b">
                <img class='thumbnail' slot='thumbnail' src="./assets/img/1.png" />
                <p slot="title" class="title">lorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
                <p slot="price">Rs.180,000,000</p>
                <p slot="description" class="description">em ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
            </property-view>
            <property-view id="id-b">
                <img class='thumbnail' slot='thumbnail' src="./assets/img/1.png" />
                <p slot="title" class="title">lorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
                <p slot="price">Rs.180,000,000</p>
                <p slot="description" class="description">em ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
            </property-view>
            <property-view id="id-b">
                <img class='thumbnail' slot='thumbnail' src="./assets/img/1.png" />
                <p slot="title" class="title">lorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
                <p slot="price">Rs.180,000,000</p>
                <p slot="description" class="description">em ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
            </property-view>
            <property-view id="id-b">
                <img class='thumbnail' slot='thumbnail' src="./assets/img/1.png" />
                <p slot="title" class="title">lorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
                <p slot="price">Rs.180,000,000</p>
                <p slot="description" class="description">em ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
            </property-view>
            <property-view id="id-b">
                <img class='thumbnail' slot='thumbnail' src="./assets/img/1.png" />
                <p slot="title" class="title">lorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
                <p slot="price">Rs.180,000,000</p>
                <p slot="description" class="description">em ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
            </property-view>
            <property-view id="id-b">
                <img class='thumbnail' slot='thumbnail' src="./assets/img/1.png" />
                <p slot="title" class="title">lorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
                <p slot="price">Rs.180,000,000</p>
                <p slot="description" class="description">em ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
            </property-view>
            <property-view id="id-b">
                <img class='thumbnail' slot='thumbnail' src="./assets/img/1.png" />
                <p slot="title" class="title">lorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsaorem ipsam</p>
                <p slot="price">Rs.180,000,000</p>
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
