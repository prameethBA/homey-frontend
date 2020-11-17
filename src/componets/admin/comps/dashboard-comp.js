import Base from '/componets/Base.js'
import CSS from './dashboard-comp.css.js'

export default class Dashboard extends Base {
    css = CSS

    content = `
        <div class="container">
            <div class="row card-container">

                <div class="card">
                    <div class="row">
                        <span class="card-title">Visitors</span>
                        <span class="card-duration">
                            <button class="success">Month</button>
                        </span>
                    </div>
                    <div class="row">
                        <span class="card-value">90, 532</span>
                    </div>
                    <div class="row">
                        <span class="card-total">1M</span>
                        <span class="card-percent">^5.5%</span>
                    </div>
                </div>

                <div class="card">
                    <div class="row">
                        <span class="card-title">Advertisements</span>
                        <span class="card-duration">
                            <button class="success">Month</button>
                        </span>
                    </div>
                    <div class="row">
                        <span class="card-value">1, 401</span>
                    </div>
                    <div class="row">
                        <span class="card-total">102K</span>
                        <span class="card-percent">^6.43%</span>
                    </div>
                </div>

                <div class="card">
                    <div class="row">
                        <span class="card-title">Registerd users</span>
                        <span class="card-duration">
                            <button class="success">Month</button>
                        </span>
                    </div>
                    <div class="row">
                        <span class="card-value">51, 999</span>
                    </div>
                    <div class="row">
                        <span class="card-total">531K</span>
                        <span class="card-percent">^2.1%</span>
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
                        <span class="card-value">231</span>
                    </div>
                    <div class="row">
                        <span class="card-total">Rejected : 3K</span>
                        <span class="card-percent">2.1%</span>
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
                        <span class="card-value">31</span>
                    </div>
                    <div class="row">
                        <span class="card-total">Total : 1.96K</span>
                        <span class="card-percent">98.44% reviewed</span>
                    </div>
                </div>

            </div>
            <div class="row chart-container">
                <div id="chart_div"></div>
            </div>
        </div>
    `

    constructor() {
        super()
        this.mount()
    } //End of constructor

    //load Chart
    loadChart() {
        google.charts.load('current', { packages: ['corechart', 'line'] })
        google.charts.setOnLoadCallback(drawBackgroundColor)
        const chartDiv = this._qs('#chart_div')

        function drawBackgroundColor() {
            var data = new google.visualization.DataTable()
            data.addColumn('number', 'X')
            data.addColumn('number', 'traffic')

            let today = new Date()

            data.addRows([
                [0, 0],
                [1, 10],
                [2, 23],
                [3, 17],
                [4, 18],
                [5, 9],
                [6, 11],
                [7, 27],
                [8, 33],
                [9, 40],
                [10, 32],
                [11, 35],
                [12, 30],
                [13, 40],
                [14, 42],
                [15, 47],
                [16, 44],
                [17, 48],
                [18, 52],
                [19, 54],
                [20, 42],
                [21, 55],
                [22, 56],
                [23, 57],
                [24, 60],
                [25, 50],
                [26, 52],
                [27, 51],
                [28, 49],
                [29, 53],
                [30, 55],
                [31, 60],
                [32, 61],
                [33, 59],
                [34, 62],
                [35, 65],
                [36, 62],
                [37, 58],
                [38, 55],
                [39, 61],
                [40, 64],
                [41, 65],
                [42, 63],
                [43, 66],
                [44, 67],
                [45, 69],
                [46, 69],
                [47, 70],
                [48, 72],
                [49, 68],
                [50, 66],
                [51, 65],
                [52, 67],
                [53, 70],
                [54, 71],
                [55, 72],
                [56, 73],
                [57, 75],
                [58, 70],
                [59, 68],
                [60, 64],
                [61, 60],
                [62, 65],
                [63, 67],
                [64, 68],
                [65, 69],
                [66, 70],
                [67, 72],
                [68, 75],
                [69, 80]
            ])

            var options = {
                hAxis: {
                    title: 'Time'
                },
                vAxis: {
                    title: 'Hits'
                },
                backgroundColor: '#f1f8e9'
            }

            var chart = new google.visualization.LineChart(chartDiv)
            chart.draw(data, options)
        }
    } //End of loadChart

    //close the dock
    close() {
        this._qs('#close-popup').addEventListener('click', () => {
            this.exitDock()
        })
    } //End of the close()

    // Exit the dock
    exitDock() {
        this._qs('.backdrop').style.opacity = '0'
        this._qs('.backdrop').style.pointerEvents = 'none'
    } // End of exitDock()

    //Exit with Escape key
    exitWithEscape() {
        addEventListener('keyup', ({ key }) =>
            key === 'Escape' ? this.exitDock() : null
        )
    } // End of exitWithEscape()

    connectedCallback() {
        // // close the dock
        // this.close()
        // // Exit with escape key
        // this.exitWithEscape()

        //load Chart
        this.loadChart()
    } //End of connectedCallback
} //End of Class

window.customElements.define('dashboard-comp', Dashboard)
