import CSS from './Base.css.js'

export default class Base extends HTMLElement {
    template = document.createElement('template')

    state = {}

    host = 'https://api.homey.lk'

    loader = `<div class="lds-dual-ring"></div>`

    styled() {
        return `<style>
            ${CSS}
            ${this.css}
        </style>`
    }
    render() {
        this.template.innerHTML = this.styled() + this.content
    }
    mount() {
        this.render()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.appendChild(this.template.content.cloneNode(true))
    }
    setPath(path) {
        window.history.pushState({}, '', path)
        if (!(path == '' || path == null || path.length <= 2))
            dispatchEvent(
                new CustomEvent('pathChanged', {
                    detail: { path: path.substr(1) }
                })
            )
    }

    //Authentication

    isLogin() {
        if (sessionStorage.login == 'true' || localStorage.login == 'true')
            return true
        else return false
    }

    getToken() {
        if (sessionStorage.login == 'true') return sessionStorage.token
        if (localStorage.login == 'true') return localStorage.token
        return false
    }

    getUserId() {
        if (sessionStorage.login == 'true') return sessionStorage.userId
        if (localStorage.login == 'true') return localStorage.userId
        return false
    }

    getUserType() {
        if (sessionStorage.login == 'true') return sessionStorage.userType
        if (localStorage.login == 'true') return localStorage.userType
        return false
    }

    logOut() {
        localStorage.login = 'false'
        localStorage.userId = ''
        localStorage.token = ''
        sessionStorage.login = 'false'
        sessionStorage.userId = ''
        sessionStorage.token = ''
    }

    authData() {
        return {
            userId: this.getUserId(),
            token: this.getToken()
        }
    }

    authenticate() {
        if (!this.isLogin()) {
            this.logOut()
            dispatchEvent(
                new CustomEvent('load-comp', {
                    detail: {
                        parh: '/',
                        comp: 'home/main/main',
                        compName: 'main-comp'
                    }
                })
            )
            dispatchEvent(
                new CustomEvent('pop-up', {
                    detail: {
                        pop: 'error',
                        msg: 'Log in to your account to continue.',
                        duration: 5
                    }
                })
            )
            dispatchEvent(new Event('load-login-form'))
        }
    }

    // Helpers

    // Slectors
    _qs(selector) {
        return this.shadowRoot.querySelector(selector)
    }

    qs(selector) {
        return this.querySelector(selector)
    }

    _qsAll(selector) {
        return this.shadowRoot.querySelectorAll(selector)
    }

    qsAll(selector) {
        return this.querySelectorAll(selector)
    }

    // sleep
    sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

    // Loader
    setLoader = () => dispatchEvent(new Event('pre-load'))

    stopLoader = () => dispatchEvent(new Event('stop-pre-load'))

    wait = selector => {
        this.state.wait = this._qs(selector).innerHTML
        this._qs(selector).innerHTML += this.loader
    }

    unwait = selector => (this._qs(selector).innerHTML = this.state.wait)

    encode(data) {
        try {
            return encodeURIComponent(JSON.stringify(data))
        } catch (err) {
            return err
        }
    }

    decode(data) {
        try {
            return JSON.parse(decodeURIComponent(data))
        } catch (err) {
            return err
        }
    }

    getParams(param) {
        return this.decode(this.getAttribute(param))
    }

    getParam(param) {
        return this.getAttribute(param)
    }
}
