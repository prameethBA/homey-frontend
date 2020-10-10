export default class Base extends HTMLElement {
    template = document.createElement('template')

    state = {}

    styled() {
        return '<style>' + this.style + '</style>'
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
    
}
