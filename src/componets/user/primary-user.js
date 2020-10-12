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

        const dataArray  = ['Seaview Luxury Double Bedroom for Rent at Border DehiwalaSeaview Luxury Double Bedroom for Rent at Border Dehiwala', 'Apartment in Wellwatte Near safeplace inface to Gallface']
        let data = '';
        for (let index = 0; index < dataArray.length; index++) {
            let title = dataArray[index].length>75 ? dataArray[index].substr(0, 75) + `...` : dataArray[index]
            data += `
            <property-view>
                <h4 slot="title">` + title + `</h4>
            </property-view>
            `
        }

        import('./property-view.js')
            .then(this._qs('.container').innerHTML = data)
            .catch(err => console.log(err))
    }

}

window.customElements.define('primary-user', PrimaryUser)
