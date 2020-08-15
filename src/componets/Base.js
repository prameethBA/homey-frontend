export default class Base extends HTMLElement {
    template = document.createElement('template')

    style(style) {
        if (style === null) return ' '
        return '<style>' + style + '</style>'
    }
    render(style, content) {
        if (content === null) content = ''
        this.template.innerHTML = this.style(style) + content
    }
}
