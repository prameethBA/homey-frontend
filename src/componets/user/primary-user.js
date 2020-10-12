import Base from './../Base.js'

import './property-view.js'



export default class PrimaryUser extends Base {
    css = `
    .container {
        text-align: center;
    }
    `
    content = `
    <div class="container">
        <property-view></property-view>
        <property-view></property-view>
        <property-view></property-view>
        <property-view></property-view>
        <property-view></property-view>
        <property-view></property-view>
        <property-view></property-view>
        <property-view></property-view>
    <div>
    `

    constructor() {
        super()
        this.mount()
    }

}

window.customElements.define('primary-user', PrimaryUser)
