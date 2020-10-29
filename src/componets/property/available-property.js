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
                this._qs('.container').innerHTML = ''
                axios.get('http://homey-api.atwebpages.com/property/all/overview')
                    .then(res => {
                        console.log(res.data)
                        res.data.forEach(item => {
                            this._qs('.container').innerHTML += `
                                <property-view id="${item._id}">
                                    <img class='thumbnail' slot='thumbnail' src="./assets/img/1.png" />
                                    <p slot="title" class="title">${item.title}</p>
                                    <p slot="price" class="price">Rs. ${item.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                    <p slot="description" class="description">${item.description}</p>
                                </property-view>
                            `
                        })
                    })
        })

    }//end of constructor

    connectedCallback() {

    }//End of connected callback

}//End of Class

window.customElements.define('available-property', AvalibaleProperty)
