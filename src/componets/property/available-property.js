import Base from '../Base.js'

export default class AvalibaleProperty extends Base {

    css = `
    #container {
       display: grid;
       justify-content: center;
       grid-gap: 10px;
       grid-template-columns: repeat(auto-fill, 20rem);
       overflow-x: auto;
       margin-top: 5rem;
    }

    #container::-webkit-scrollbar {
        height: 0;
    }

    property-view {
        display: inline-block;
    }

    .pagination {
        margin: 0.1rem auto 2rem auto;
        display: table;
    }

    .pagination a {
        color: blue;
        cursor: pointer;
    }

    @media screen and (max-width: 1200px) {

    }

    @media screen and (max-width: 992px) {

    }

    @media screen and (max-width: 768px) {

    }

    @media screen and (max-width: 512px) {
        #container {
            display: flex;
            overflow: scroll;
        }
    }

    `

    content = `
    <div id="container">
    </div>
    <div class="pagination">
        <a class="previous">First</a> | <a>1</a> | <a>2</a> | <a class="current">3</a> | <a>4</a> | <a>5</a> |<a class="last">Last</a>
    </div>
    `

    constructor() {
        super()
        this.mount()
        this.setLoader()
        import('./subcomp/property-view.js')

        this.state.page = 1
        this.state.limit = 12

        for (let index = 0; index < this.state.limit; index++) {
            this._qs('#container').innerHTML += `
                    <property-view id="id-${index}" key="${index}">
                        <p slot="title" class=" title title-${index}">Title</p>
                        <p slot="price" class=" price price-${index}">Price</p>
                        <p slot="description" class=" description description-${index}">Description</p>
                    </property-view>
                `
        }
        this.stopLoader()
    }//end of constructor
    
   connectedCallback() {

    const fetchAdds = async (limit, page, find='find') => {
        this.setLoader()
        this.state.ids = []
        await axios.get(`http://homey-api.atwebpages.com/property/all/${limit}/${page}`)
            .then(async res => {
                    res.data.forEach((item, index) =>{
                    this.stopLoader()
                    this.state.ids.push(item._id)
                    this._qs(`#id-${index}`).id = item._id
                    this._qs(`.title-${index}`).innerHTML  = item.title
                    this._qs(`.price-${index}`).innerHTML  = 'Rs.' + item.price.replace(/\B(?=(\d{3})+(?!\d))/, ",")
                    this._qs(`.description-${index}`).innerHTML  = item.description                
                })
                
                await axios.post(`http://homey-api.atwebpages.com/property/images`,{'ids':this.state.ids})
                    .then(res => {
                        const data = JSON.parse(res.data).data[0]
                        const len = (Object.keys(data).length)
                        for (let loop = 0; loop < len; loop++) {
                            for (let index = 0; index < data[loop].images.length; index++) {
                                for (let index2 = 0; index2 < Object.keys(data[loop].images[index]).length; index2++) {
                                    data[loop].images[index][index2]
                                    this._qs(`#${data[loop].id}`).innerHTML += `
                                        <img class='thumbnail' slot='thumbnail' src="${data[loop].images[index]}" />
                                        `
                                }
                                }
                        }
                    })
                })
                .catch(err => dispatchEvent(new CustomEvent("pop-up", { detail: { pop: 'error', msg: err } })))
        }
        
        fetchAdds(10, 0)
        
    }//End of connected callback

}//End of Class

window.customElements.define('available-property', AvalibaleProperty)
