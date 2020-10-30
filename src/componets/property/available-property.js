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

        this.state.limit = 12
        this.state.page = 0

        import('./subcomp/property-view.js').then( () =>{
            this._qs('.container').innerHTML = ''
            for (let index = this.state.page * this.state.limit; index < (this.state.page + 1) * this.state.limit; index++) {
                this._qs('.container').innerHTML += `
                <property-view id="property-${index}">
                    <img class='thumbnail-${index}' slot='thumbnail' src="./assets/img/1.png" />
                    <p slot="title" class="title-${index}">Title</p>
                    <p slot="price" class="price-${index}">Price</p>
                    <p slot="description" class="description-${index}">Desc</p>
                </property-view>
                `   
            }
            this.stopLoader()
        })
            .catch(err => {
                dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } }))
                this.stopLoader()
            })
        
    }//end of constructor
    
   async connectedCallback() {

        this.setLoader()
        await import('./subcomp/property-view.js')
            .then(async () => {
                await axios.get('http://homey-api.atwebpages.com/property/all/overview')
                .then(res => {
                   for (let index = this.state.page * this.state.limit; index < (this.state.page + 1) * this.state.limit; index++) {
                       console.log(this._qs(`thumbnail-${index}`))
                   }
                    this.stopLoader()
                })
            })
                .catch(err => {
                    dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } }))
                    this.stopLoader()
            })

    }//End of connected callback

}//End of Class

window.customElements.define('available-property', AvalibaleProperty)
