export default class Base extends HTMLElement {
    template = document.createElement('template')

    state = {}

    styled() {
        return '<style>' + this.css + '</style>'
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

    setLoader = () => dispatchEvent(new Event('pre-load'))

    stopLoader = () => dispatchEvent(new Event('stop-pre-load'))
    
}
