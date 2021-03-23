import Base from '../../../Base.js'
import CSS from './comment-box.css.js'

export default class CommentBox extends Base {
    css = CSS

    loader = `<img src="/assets/img/alt/load-post.gif">`

    content = `
        <!-- Comment - Dummy -->
        <div class="comment">
        <!-- Comment Avatar -->
        <div class="comment-avatar" id="profile-picture">
            ${this.loader}
        </div>
    
        <!-- Comment Box -->
        <div class="comment-box">
            <div class="comment-text">
                comment
            </div>
            <div class="comment-footer">
            <div class="comment-info">
                <span class="comment-author">
                <span class="comment-author" id="comment-author">Me</span>
                </span>
                <span class="comment-date">
                    Just now
                </span>
            </div>
    
            <div class="comment-actions">
                <a href="#">Reply</a>
            </div>
            </div>
        </div>
        </div>
    `

    constructor() {
        super()
        this.mount()
        this.state = this.getParams('data-data')
    } //End of constructor

    //getprofilePicture
    async getprofilePicture(userID) {
        try {
            const res = await axios.post(
                `${this.host}/images/get-profile-image/${userID}`
            )
            this._qs('#profile-picture').innerHTML = `<img 
                  src="${
                      res.data.image != ''
                          ? res.data.image
                          : '/assets/img/alt/no-mage.png'
                  }" 
                  alt="Profile picture"
                  />`
        } catch (err) {
            console.log(err)
        }
    } //End of getprofilePicture()

    //viewComment
    async viewComment() {
        if (this.getParam('view') == 'true') {
            const res = await axios.post(
                `${this.host}/feedback/get-property/${this.getParam('id')}`
            )
            this._qs('.comment-text').innerHTML = res.data.feedback
            this._qs('.comment-date').innerHTML = res.data.created
            this._qs('#comment-author').innerHTML =
                res.data.userId == '0'
                    ? 'Anonymous'
                    : `${res.data.firstName} ${res.data.lastName}`

            if (res.data.userId == '0')
                this._qs('#profile-picture').innerHTML = `
                    <img 
                        src='/assets/img/alt/no-mage.png' 
                        alt="Profile picture"
                    />`
            else this.getprofilePicture(res.data.userId) //getprofilePicture
        } else {
            this._qs('#profile-picture').innerHTML = `<img
                        src="${this.state.image}"
                        alt="Profile picture"
                    />`
            this._qs('.comment-text').innerHTML = this.state.feedback
        }
    } //End of viewComment()

    connectedCallback() {
        //viewComment
        this.viewComment()
    } //End of connectedCallback
} //End of class

const elementName = 'comment-box'
// customElements.get(elementName) == undefined?
window.customElements.define(elementName, CommentBox)
// : null
