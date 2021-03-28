import Base from "../Base.js";
import CSS from "./confirm-form.css.js";

export default class Confirm extends Base {
  css = CSS;
  content = `
          <div id="backdrop" title="Click to close this form">
          </div>

          <div class="form">
            <div class="container">
              <p>Waiting for the server...</p>
              <span>Go to <a>home 🏠</a></span>
            </div>
          </div>
  `;

  constructor() {
    super();
    this.mount();
    const getQueryStringParams = (query) => {
      return query
        ? (/^[?#]/.test(query) ? query.slice(1) : query)
            .split("&")
            .reduce((params, param) => {
              let [key, value] = param.split("=");
              params[key] = value
                ? decodeURIComponent(value.replace(/\+/g, " "))
                : "";
              return params;
            }, {})
        : {};
    };

    const data = getQueryStringParams(window.location.search);

    const confirmUser = async () => {
      console.log(data);
      await axios
        .post(`${this.host}/signup/confirm`, {
          userId: data.id,
          hash: data.hash,
        })
        .then((res) => {
          this._qs("p").innerHTML = res.data.message;
          if (res.status == 201) {
            this.popup(res.data.message, "success");
            this.setPath("/login");
            dispatchEvent(new Event("load-login-form"));
          } else throw res.data;
        })
        .catch((err) => this.popup(err.message, "error"));
    };

    confirmUser();
  } //End of constructor

  connectedCallback() {
    this._qs("a").addEventListener("click", () => {
      dispatchEvent(new Event("exit-form"));
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            parh: "/",
            comp: "home/main/main",
            compName: "main-comp",
          },
        })
      );
      this.setPath("/");
    });
  } //End of callback
} //End of the class

const elementName = "confirm-form";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, Confirm)
  : null;
