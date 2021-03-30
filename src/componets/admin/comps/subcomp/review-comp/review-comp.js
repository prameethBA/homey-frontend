import Base from "/componets/Base.js";
import CSS from "./review-comp.css.js";

export default class Review extends Base {
    css = CSS;

    content = `
    <div class="backdrop">
        <div class="container">
            <span id="close-popup" title="close(Esc)">+</span>
            <div class="row">
                    <span class="menu-title">Review Report - "property name"</span>
            </div>
            <div class="row">
                    <span class="test-content"></span>
            </div>
            <div class="report-app">
              <div class="report-details">
                  <div class="report-coloumn report-name">Prperty name : osanda's property</div>
                  <div class="report-coloumn report-prop-id">Prperty Id : 12da781239faqw01232131</div>
                  <div class="report-coloumn report-reason">Reason for report : photos looks unreal and fake</div>
                  <div class="report-coloumn report-other">Other Details :</div>

              </div>
              <div class="property-details">
              </div>
            </div>
            <div class="buttons">
            <button id=ban>Ban</button>
            <button id=delete>Delete</button>
            <button id=ignore>Ignore</button>
            </div>


        <div class="loader"></div>
    </div>
`;
    constructor() {
            super();
            this.mount();
        } //End of constructor

    //get report
    async getReport() {
        this.wait(".loader");
        try {
            const res = await axios.post(`${this.host}/feedback/get-report`, {
                ...this.authData(),
                id: this.getParam("id"),
            });

            if (res.status == 200) {
                this._qs(".test-content").innerHTML = JSON.stringify(res.data);
                console.log(res.data);
            } else throw res.data;
        } catch (err) {
            console.log(err.message);
        }
        this.unwait(".loader");
    }

    //close the dock
    close() {
            this._qs("#close-popup").addEventListener("click", () => {
                this.exitDock();
            });
        } //End of the close()

    // Exit the dock
    exitDock() {
            this._qs(".backdrop").style.opacity = "0";
            this._qs(".backdrop").style.pointerEvents = "none";
        } // End of exitDock()

    //Exit with Escape key
    exitWithEscape() {
            addEventListener("keyup", ({ key }) =>
                key === "Escape" ? this.exitDock() : null
            );
        } // End of exitWithEscape()

    connectedCallback() {
            // close the dock
            this.close();
            // Exit with escape key
            this.exitWithEscape();

            //get report
            this.getReport();
        } //End of connectedCallback
} //End of Class

const elementName = "review-comp";
customElements.get(elementName) == undefined ?
    window.customElements.define(elementName, Review) :
    null;