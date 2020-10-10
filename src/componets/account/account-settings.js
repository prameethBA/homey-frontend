import Base from './../Base.js'

export default class AccountSettings extends Base {

  css =  `

`


  content = `

`
    constructor() {
      super()
      this.mount()

    }

  }

  window.customElements.define('account-settings', AccountSettings)