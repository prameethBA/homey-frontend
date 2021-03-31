import Base from "../Base.js";
import CSS from "./navigation-bar.css.js";
//import '/componets/home/notification-bar.js'

export default class Nav extends Base {
  css = CSS;

  preContent = `
  <nav class="topnav">
    <div class="row">
      <span class="logo">
        <img src="/assets/img/homey_logo.png" />
      </span>
    </div>
    <div class="row separator"></div>
    <div class="row nav-items">
      <button id="forum-button"> Forum </button>
      <button id="login-button"> login </button>
    </div>
  </nav>
  `;

  loginContent = `
        <nav class="topnav">
          <div class="row">
            <span class="logo">
              <img src="/assets/img/homey_logo.png" />
            </span>
          </div>
          <div class="row separator"></div>
          <div class="row nav-items">
            <a data-path=""><img src="/assets/icon/Notification/notification_24px.png" id="notification"><span id="notification-count"></span></a>
            <a data-path="property" id="property" class="nav-link">Properties</a>
            <a data-path="favourite" id="favourite" class="nav-link">Favourites</a>

            <div class="dropdown">
              <button class="dropbtn" class="nav-link" id="own-property">Own Properties
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a data-path="own-properties" id="reserved-properties">Reserved Properties</a>
                <a data-path="own-properties" id="add-new-property">Add New Property</a>
                <a data-path="own-properties" id="own-properties">View Own Properties</a>
              </div>
            </div>

            <div class="dropdown">
              <button class="dropbtn" class="nav-link" id="payments">Payments
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a data-path="payments" id="received">Received Payments</a>
                <a data-path="payments" id="paid">Paying History</a>
                <a data-path="payments" id="all">Transaction History</a>
                <a data-path="payments" id="cashout">Cash out</a>
                <a data-path="payments" id="bank-account">Bank Account Details</a>
              </div>
            </div>

            <a data-path="" id="forum"> Forum </a>

            <div class="dropdown">
              <button class="dropbtn" class="nav-link" id="account">Account & Settings
                <i class="fa fa-caret-down"></i>
              </button>
              <div class="dropdown-content">
                <a data-path="account" id="wallet">Wallet</a>
                </div>
              </div>
              <a data-path="" id="admin-button-container"></a>
              <a class="profile" id="profile">
                <img id="profile-picture" src="/assets/img/alt/load-post.gif" alt="Profile">
                <span id="profile-name"></span>
              </a>
              <a data-path="account" id="log-out">Logout</a>
            <a data-path="" class="hamburger">&#9776;</a>
          </div>
        </nav>
        `;

  content = `
    <header></header>
    <div id="notification-bar-box"></div>`;

  constructor() {
    super();
    this.mount();

    //pre Content Behaviour
    this.setNavBar();
    //Set Navigation
    if (this.isLogin()) this.setNavigation();

    addEventListener("profile-picture-loaded", () => {
      this._qs("#profile-picture").src = localStorage.profilePicture;
    });
  } //End of the constructor

  //Set Nav Bar
  setNavBar() {
    if (!this.isLogin()) {
      this._qs("header").innerHTML = this.preContent;
      //load login form
      this.loadLoginForm();
    } else {
      this._qs("header").innerHTML = this.loginContent;
      //set as Active
      this.setAsActive();
      //Toggle Nav bar
      this.toggleNavBar();
      //Set admin dashboard button
      if (this.getUserType() == 1) {
        this._qs(
          "#admin-button-container"
        ).innerHTML = `<button id="admin-dashboard">Admin Dashboard</button>`;
        //load Admin bashboard
        this.loadAdminDashboard();
      } //End of setting admin dashboard button

      !(
        localStorage.profilePicture == undefined ||
        localStorage.profilePicture == null ||
        localStorage.profilePicture == ""
      )
        ? (this._qs("#profile-picture").src = localStorage.profilePicture)
        : (this._qs("#profile-picture").src = "/assets/img/alt/no-mage.png");

      !(
        sessionStorage.name == undefined ||
        sessionStorage.name == null ||
        sessionStorage.name == ""
      )
        ? (this._qs("#profile-name").innerHTML = sessionStorage.name)
        : (this._qs("#profile-name").innerHTML = "");
    } //End of setting navigation

    // load Home
    this.loadHome();
  } // End of setNavBar()

  // Navigation
  setNavigation() {
    // properties
    this._qs("#property").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/properties`,
            comp: `property/available-property`,
            compName: "available-property",
          },
        })
      )
    );
    // favourite
    this._qs("#favourite").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/favourite`,
            comp: `property/favourite`,
            compName: "favourite-comp",
          },
        })
      )
    );
    //Add New property
    this._qs("#add-new-property").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/add-new-property`,
            comp: `property/add-new-property`,
            compName: "add-new-property",
          },
        })
      )
    );
    //Own property
    this._qs("#own-properties").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/own-properties`,
            comp: `property/own-properties`,
            compName: "own-properties",
          },
        })
      )
    );

    //Reserved Property
    this._qs("#reserved-properties").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/reserved-properties`,
            comp: `property/reserved-properties`,
            compName: "reserved-properties",
          },
        })
      )
    );

    // Payments
    this._qs("#received").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/payment/received`,
            comp: `payments/payment-received`,
            compName: "payment-received",
          },
        })
      )
    );
    this._qs("#paid").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/payment/paid`,
            comp: `payments/payment-paid`,
            compName: "payment-paid",
          },
        })
      )
    );
    this._qs("#all").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/payment/all`,
            comp: `payments/payment-all`,
            compName: "payment-all",
          },
        })
      )
    );
    this._qs("#cashout").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/payment/cashout`,
            comp: `payments/payment-cashout`,
            compName: "payment-cashout",
          },
        })
      )
    );
    this._qs("#bank-account").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/payment/bank-account`,
            comp: `payments/payment-bank-account`,
            compName: "payment-bank-account",
          },
        })
      )
    );
    //Profile
    this._qs("#profile").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/profile`,
            comp: `account/profile`,
            compName: "profile-comp",
          },
        })
      )
    );
    //forum
    this._qs("#forum").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/forum`,
            comp: `forum/forum`,
            compName: "forum-comp",
          },
        })
      )
    );
    //wallet
    this._qs("#wallet").addEventListener("click", () =>
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/wallet`,
            comp: `account/wallet`,
            compName: "wallet-comp",
          },
        })
      )
    );
    //Log out
    this._qs("#log-out").addEventListener("click", () => this.logOutMethod());
  } //end of setNavigation()

  //load Admin bashboard
  loadAdminDashboard() {
    this._qs("#admin-dashboard").addEventListener("click", () => {
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/admin`,
            comp: `admin/admin-dashboard`,
            compName: "admin-dashboard",
          },
        })
      );
    });
  } // End of loadAdminDashboard()

  //load home
  loadHome() {
    //Home
    this._qs(".logo").addEventListener("click", () => {
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/`,
            comp: `home/main/main`,
            compName: "main-comp",
          },
        })
      );
    });
  } // End of loadHome()

  //load login form
  loadLoginForm() {
    this._qs("#login-button").addEventListener("click", () => {
      dispatchEvent(new CustomEvent("load-login-form"));
    });
    this._qs("#forum-button").addEventListener("click", () => {
      dispatchEvent(
        new CustomEvent("load-comp", {
          detail: {
            path: `/forum`,
            comp: `forum/forum`,
            compName: "forum-comp",
          },
        })
      );
      // this.setPath('/forum')
    });
  } // End of loadLoginForm()

  //Toggle Nav bar
  toggleNavBar() {
    let visible = true;
    this._qs(".hamburger").addEventListener("click", () => {
      if (visible) {
        this._qs(".dropbtn").classList.add("responsive-dropbtn");
        this._qs(".nav-items").classList.add("responsive-nav-items");
        this._qs(".dropdown").classList.add("responsive-dropdown");
        this._qs(".dropdown-content").classList.add(
          "responsive-dropdown-content"
        );
        this._qs(".topnav").classList.add("responsive-topnav");
      } else {
        this._qs(".dropbtn").classList.remove("responsive-dropbtn");
        this._qs(".nav-items").classList.remove("responsive-nav-items");
        this._qs(".dropdown").classList.remove("responsive-dropdown");
        this._qs(".dropdown-content").classList.remove(
          "responsive-dropdown-content"
        );
        this._qs(".topnav").classList.remove("responsive-topnav");
      }

      visible = !visible;
    });
  } // toggleNavBar()

  //set as Active
  setAsActive() {
    this._qsAll("a").forEach((item) => {
      if (item.id == window.location.pathname.split("/")[1]) {
        // console.log(item.dataset.path)
        item.classList.add("active");
      } else item.classList.remove("active");
    });
  } //End of setAsActive()

  //Monitor link clicks
  monitorLinkClicks() {
    this._qsAll("a").forEach((link) => {
      link.addEventListener("click", () => this.setAsActive());
    });
  } //End of monitorLinkClicks()

  //Scrolbar behavoiur when scroll
  scrollNavbar() {
    addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 10) {
        this._qs("nav").classList.add("nav-scroll");
        this._qs("header").classList.add("header-scroll");
      } else {
        this._qs("nav").classList.remove("nav-scroll");
        this._qs("header").classList.remove("header-scroll");
      }
    });
  } //End of scrollNavbar()

  //Login
  loginMethod() {
    addEventListener("login-success", () => {
      this.setNavBar();
      //Set Navigation
      if (this.isLogin()) this.setNavigation();
    });
  } //loginMethod()

  //Log out
  logOutMethod() {
    this.logOut();
    this.setNavBar();
    dispatchEvent(
      new CustomEvent("load-comp", {
        detail: {
          path: `/`,
          comp: `home/main/main`,
          compName: "main-comp",
        },
      })
    );
  } //logOutMethod()

  notificationBar() {
    this._qs("#notification").addEventListener("click", async () => {
      this.setLoader();
      await import("./notification-bar.js")
        .then(() => {
          this._qs("#notification-bar-box").innerHTML = `
                        <notification-comp>
                        </notification-comp>`;
          this.stopLoader();
          //closeNotificationBar
          this.closeNotification();
        })
        .catch((err) => {
          this.stopLoader();

          this.popup(err.message, "error", 3);
        });
    });
  }

  closeNotification() {
    addEventListener("click", () => {
      this._qs("notification-comp").style.display = "none";
      this.removeEventListener("click", () => {});
    });
  }

  //newNotification
  newNotification() {
    this.state.notification = 0
    setInterval(async () => {
      try {
        const res = await axios.post(`${this.host}/notification/check-new`, {
          ...this.authData(),
        });

        if (res.status == 200)
          if (res.data.new == true) {
            if (this.state.notification < res.data.count)
              this.popup("New notification arrived.", "info", 5);
            this.state.notification = res.data.count;
            this._qs("#notification-count").innerHTML = res.data.count;
          }
      } catch (err) {
        console.log("Newtwork call failed");
      }
    }, 10000);
  }

  connectedCallback() {
    //Login method
    this.loginMethod();

    //Monitor link clicks
    this.monitorLinkClicks();

    //Scrolbar behavoiur when scroll
    this.scrollNavbar();

    //Notification Bar
    this.notificationBar();

    //newNotification
    this.newNotification();
  } // End of connected callback
} // End of Class

const elementName = "navigation-bar";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, Nav)
  : null;
