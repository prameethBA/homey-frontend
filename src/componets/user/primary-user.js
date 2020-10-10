import Base from './../Base.js'

import './property-view.js'



export default class PrimaryUser extends Base {
    css = `


    `
    content = `
        <property-view></property-view>
    `

    constructor() {
        super()
        this.mount()
    }

}

window.customElements.define('primary-user', PrimaryUser)
