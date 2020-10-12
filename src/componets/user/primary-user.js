import Base from './../Base.js'

export default class PrimaryUser extends Base {
    css = `
    .container {
        text-align: center;
    }
    `
    content = `
    <div class="container">
    <div>
    `

    constructor() {
        super()
        this.mount()

        const dataArray  = ['Seaview Luxury Double Bedroom for Rent at Border Dehiwala', 'Apartment in Wellwatte']
        let data = '';
        for (let index = 0; index < dataArray.length; index++) {
            data += `
            <property-view>
                <h3 slot="title">` + dataArray[index] + `</h3>
            </property-view>
            `
        }

        import('./property-view.js')
            .then(this._qs('.container').innerHTML = data)
            .catch(err => console.log(err))
    }

}

window.customElements.define('primary-user', PrimaryUser)
