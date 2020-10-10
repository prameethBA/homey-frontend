export default class Base extends HTMLElement {
    template = document.createElement('template')

    state = {}

    styled() {
        if (this.style === null) return ' '
        return '<style>' + this.style + '</style>'
    }
    render() {
        if (this.content === null) this.content = ''
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
}
