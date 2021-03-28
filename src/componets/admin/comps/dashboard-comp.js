import Base from "/componets/Base.js";
import CSS from "./dashboard-comp.css.js";

export default class Dashboard extends Base {
  css = CSS;

  content = `
        <div class="container">
            <div class="row card-container">

                <div class="card">
                    <div class="row">
                        <span class="card-title">Visitors</span>
                        <span class="card-duration">
                            <button class="success">${new Date().toLocaleString(
                              "default",
                              { month: "long" }
                            )}</button>
                        </span>
                    </div>
                    <div class="row">
                        <span class="card-value visitor-value">Visitor Count</span>
                    </div>
                    <div class="row">
                        <span class="card-total visitor-value-total">Total</span>
                        <span class="card-percent visitor-percent">%</span>
                    </div>
                </div>

                <div class="card">
                    <div class="row">
                        <span class="card-title">Advertisements</span>
                        <span class="card-duration">
                            <button class="success">${new Date().toLocaleString(
                              "default",
                              { month: "long" }
                            )}</button>
                        </span>
                    </div>
                    <div class="row">
                        <span class="card-value ad-value">Ads</span>
                    </div>
                    <div class="row">
                        <span class="card-total ad-value-total">Total</span>
                        <span class="card-percent ad-percent">%</span>
                    </div>
                </div>

                <div class="card">
                    <div class="row">
                        <span class="card-title">Registerd users</span>
                        <span class="card-duration">
                            <button class="success">${new Date().toLocaleString(
                              "default",
                              { month: "long" }
                            )}</button>
                        </span>
                    </div>
                    <div class="row">
                        <span class="card-value user-value">Users</span>
                    </div>
                    <div class="row">
                        <span class="card-total user-value-total">Total</span>
                        <span class="card-percent user-percent">%</span>
                    </div>
                </div>

                
                <div class="card">
                    <div class="row">
                        <span class="card-title">Pending Approval</span>
                        <span class="card-duration">
                            <button class="success">ALL</button>
                        </span>
                    </div>
                    <div class="row">
                        <span class="card-value pending-value">Pendings</span>
                    </div>
                    <div class="row">
                        <span class="card-total rejected-value">Rejected</span>
                        <span class="card-percent rejected-percent">%</span>
                    </div>
                </div>

                <div class="card">
                    <div class="row">
                        <span class="card-title">Reports to review</span>
                        <span class="card-duration">
                            <button class="success">ALL</button>
                        </span>
                    </div>
                    <div class="row">
                        <span class="card-value reports-value">Reports</span>
                    </div>
                    <div class="row">
                        <span class="card-total reports-value-total">Total</span>
                        <span class="card-percent reports-percent">Reviewed</span>
                    </div>
                </div>

            </div>
            <div class="row chart-container">
                <div id="chart_div"></div>
            </div>
            <div class="loader"></div>
        </div>
    `;

  constructor() {
    super();
    this.mount();
  } //End of constructor

  //getvisitors
  async getSummary() {
    this.wait(".loader");
    const res = await axios.post(`${this.host}/admin-summary/All`, {
      ...this.authData(),
    });

    if (res.status == "200") {
      //Visitors
      this._qs(".visitor-value").innerHTML = res.data.visitor.count;
      this._qs(".visitor-value-total").innerHTML =
        "Total : " + res.data.visitor.totalCount;
      this._qs(".visitor-percent").innerHTML =
        Math.round(
          (+res.data.visitor.count / +res.data.visitor.totalCount) * 100
        ) + "%";

      //Ads
      this._qs(".ad-value").innerHTML = res.data.ads.count;
      this._qs(".ad-value-total").innerHTML =
        "Total : " + res.data.ads.totalCount;
      this._qs(".ad-percent").innerHTML =
        Math.round((+res.data.ads.count / +res.data.ads.totalCount) * 100) +
        "%";

      //User
      this._qs(".user-value").innerHTML = res.data.user.count;
      this._qs(".user-value-total").innerHTML = res.data.user.totalCount;
      this._qs(".user-percent").innerHTML =
        Math.round((+res.data.user.count / +res.data.user.totalCount) * 100) +
        "%";

      //Pending
      this._qs(".pending-value").innerHTML = res.data.pending;
      this._qs(".rejected-value").innerHTML = "Rejected : " + res.data.rejected;
      this._qs(".rejected-percent").innerHTML =
        Math.round(
          (+res.data.rejected / (+res.data.pending + +res.data.rejected)) * 100
        ) + "%";

      //Reports
      this._qs(".reports-value").innerHTML = res.data.reports.pending;
      this._qs(".reports-value-total").innerHTML =
        "Total : " + (+res.data.reports.pending + +res.data.reports.reviewd);
      this._qs(".reports-percent").innerHTML =
        Math.round(
          (+res.data.reports.reviewd /
            (+res.data.reports.pending + +res.data.reports.reviewd)) *
            100
        ) + "% Reviewed";
    }
    this.unwait(".loader");
  }

  //load Chart
  async loadChart() {
    this.wait("#chart_div");
    const res = await axios.post(`${this.host}/admin-summary/get-traffic`, {
      ...this.authData(),
    });

    if (res.status == 200) {
      google.charts.load("current", { packages: ["corechart", "line"] });
      google.charts.setOnLoadCallback(drawBackgroundColor);
      const chartDiv = this._qs("#chart_div");

      function drawBackgroundColor() {
        var data = new google.visualization.DataTable();
        data.addColumn("number", "X");
        data.addColumn("number", "traffic");

        let today = new Date();
        let dataArray = [];
        res.data.forEach((item) => {
          dataArray.push([+item.date.substring(8), +item.hits]);
        });

        data.addRows(dataArray);

        var options = {
          hAxis: {
            title: "Date",
          },
          vAxis: {
            title: "Hits",
          },
          backgroundColor: "#f1f8e9",
        };

        var chart = new google.visualization.LineChart(chartDiv);
        chart.draw(data, options);
      }
    }
  } //End of loadChart

  //close the dock
  // close() {
  //     this._qs('#close-popup').addEventListener('click', () => {
  //         this.exitDock()
  //     })
  // } //End of the close()

  // // Exit the dock
  // exitDock() {
  //     this._qs('.backdrop').style.opacity = '0'
  //     this._qs('.backdrop').style.pointerEvents = 'none'
  // } // End of exitDock()

  // //Exit with Escape key
  // exitWithEscape() {
  //     addEventListener('keyup', ({ key }) =>
  //         key === 'Escape' ? this.exitDock() : null
  //     )
  // } // End of exitWithEscape()

  connectedCallback() {
    // // close the dock
    // this.close()
    // // Exit with escape key
    // this.exitWithEscape()

    //load Chart
    this.loadChart();

    //getvisitors
    this.getSummary();
  } //End of connectedCallback
} //End of Class

const elementName = "dashboard-comp";
customElements.get(elementName) == undefined
  ? window.customElements.define(elementName, Dashboard)
  : null;
