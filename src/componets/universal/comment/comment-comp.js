import Base from '../../Base.js'
import CSS from './comment-comp.css.js'

export default class Comment extends Base {
    css = CSS

    loader = `<img src="/assets/img/alt/load-post.gif">`

    content = `
    <div class="backdrop">
    <div class="comments-app">
        <div id="close">+</div>
        <h1>${this.getParams('data-data')}</h1>
        
        <!-- From -->
        <div class="comment-form">
          <!-- Comment Avatar -->
          <div class="comment-avatar" id="profile-picture">
            ${this.loader}
          </div>
      
          <div class="form" name="form">
            <div class="form-row">
              <textarea class="input" placeholder="Add comment..." required id="feedback"></textarea>
            </div>
            <div class="form-row">
              <!--<input class="input" placeholder="Email" type="email">-->
            </div>
            <div class="form-row text-right">
              <input id="comment-anonymous" type="checkbox">
              <label for="comment-anonymous">Anonymous</label>
            </div>
            <div class="form-row">
              <input type="submit" value="Add Comment" id="submit">
            </div>
          </div>
        </div>
      
        <!-- Comments List -->
        <div id="comments-new" class="comments">          
        </div>
        <div id="comments" class="comments">          
        </div>
      </div>
      </div>

    `

    constructor() {
            super()
            this.mount()
        } //End of constructor

    //getprofilePicture
    async getprofilePicture() {
            try {
                const res = await axios.post(`${this.host}/images/profile/get`, {
                    userId: this.getUserId(),
                    token: this.getToken()
                })
                this._qs(
                    '#profile-picture'
                ).innerHTML = `<img id="profile-picture-image"
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

    //add new comment
    addNewComment() {
            this._qs('#submit').addEventListener('click', async() => {
                try {
                    const feedback = this._qs('#feedback').value
                    const anonymous = this._qs('#comment-anonymous').checked ? 1 : 0
                    if (feedback == '') throw 'Empty comment'
                    const res = await axios.post(`${this.host}/feedback/add`, {
                        ...this.authData(),
                        propertyId: this.getParam('id'),
                        feedback: feedback,
                        anonymous: anonymous
                    })

                    if (res.status == 201) {
                        dispatchEvent(
                            new CustomEvent('pop-up', {
                                detail: {
                                    pop: 'success',
                                    msg: res.data.message,
                                    duration: 5
                                }
                            })
                        )

                        await
                        import ('./subcomp/comment-box.js')
                        const values = this._qs('#comments-new').innerHTML
                        this._qs('#comments-new').innerHTML =
                            `<comment-box data-data="${this.encode({
                            feedback: feedback,
                            propertyId: this.getParam('id'),
                            image: this._qs('#profile-picture-image').src
                        })}"></comment-box>` + values

                        this._qs('#feedback').value = ''
                    } else throw res.data
                } catch (err) {
                    console.log(err)
                }
            })
        } //End of addNewComment()

    //get comments
    async getComments() {
            try {
                const res = await axios.post(`${this.host}/feedback/get/all`, {
                    ...this.authData(),
                    propertyId: this.getParam('id')
                })

                await
                import ('./subcomp/comment-box.js')
                res.data.forEach(item => {
                    this._qs(
                        '#comments'
                    ).innerHTML += `<comment-box id=${item.id} view="true"></comment-box>`
                })
            } catch (err) {
                console.log(err)
            }
        } //End of getComments()

    connectedCallback() {
            this._qs('#close').addEventListener(
                'click',
                () => (this._qs('.backdrop').style.display = 'none')
            )

            //get comments
            this.getComments()

            //getprofilePicture
            this.getprofilePicture()

            //add new comment
            this.addNewComment()
        } //End of connectedCallback
} //End of class

window.customElements.define('comment-comp', Comment)