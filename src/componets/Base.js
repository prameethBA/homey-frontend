export default class Base extends HTMLElement {
    template = document.createElement('template')

    state = {}

    host = 'http://api.homeylk.tk'

    styled() {
        return `<style>${this.css}</style>`
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
        if (!(path == '' || path == null || path.length <= 2)) dispatchEvent(new CustomEvent('pathChanged', { detail: { 'path': path.substr(1) } }))
    }

    //Authentication 

    isLogin() {
        if(sessionStorage.login == 'true' || localStorage.login == 'true') return true 
        else return false
    }

    getToken() {
        if(sessionStorage.login == 'true') return sessionStorage.token
        if(localStorage.login == 'true') return localStorage.token
        return false
    }

    getUserId() {
        if(sessionStorage.login == 'true') return sessionStorage.userId
        if(localStorage.login == 'true') return localStorage.userId
        return false
    }

    getUserType() {
        if(sessionStorage.login == 'true') return sessionStorage.userType
        if(localStorage.login == 'true') return localStorage.userType
        return false
    }

    logOut() {
        localStorage.login = 'false'; localStorage.userId = ''; localStorage.token = ''
        sessionStorage.login = 'false'; sessionStorage.userId = ''; sessionStorage.token = ''
    }


    // Helpers
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

    sleep = ms => {
        return new Promise(resolve => setTimeout(resolve, ms));
      }

    setLoader = () => dispatchEvent(new Event('pre-load'))

    stopLoader = () => dispatchEvent(new Event('stop-pre-load'))

}
