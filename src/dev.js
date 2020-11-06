import Base from '/componets/Base.js'

export default class Dev extends Base {

    css = `
       .contanier {
            margin: 5rem 1rem;
        } 

        table {
            font-family: Arial, Helvetica, sans-serif;
            border-collapse: collapse;
            width: 100%;
          }
          
          table td, table th {
            border: 1px solid #ddd;
            padding: 8px;
          }
          
          table tr:nth-child(even){background-color: #f2f2f2;}
          
          table tr:hover {background-color: #ddd;}
          
          table th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #4CAF50;
            color: white;
          }

          button {
            pposition: relative;
            display: inline-block;
            height: 3em;
            border-radius: 25px;
            outline: none;
            border: none;
            background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
            font-size: 0.8rem;
            color: #fff;
            text-transform: uppercase;
            margin: 0.5rem;
            cursor: pointer;
            transition: all 1s;
            min-width: 15%;
        }

        button:hover{
            cursor: pointer;
            background-position: right;
            color: black;
            box-shadow: 0 0 20px -5px;
        }
    `
    content = `
        <div class="contanier">
            <div class="tabels">
            </div>
            <div class="data">
            </div>
            <table>
                <thead>
                    <tr class="header"></tr>
                </thead>
                <tbody class="tabel-data">
                </tbody>
            </table>
        </div>
`
    constructor() {
            super()
            this.mount()
            
        this.getTables()
    } //End of constructor

    async getTables() {
        this.setLoader()
        await axios.get(`${this.host}/dev/tables`)
            .then(res => {
                res.data.forEach(element => {
                    this._qs('.tabels').innerHTML += `<button id="${element.Tables_in_3606050_homey}">${element.Tables_in_3606050_homey}</button>`
                })
                this.addListener()
                this.stopLoader()
            })
            .catch(err => {
                console.log(err)
                this.stopLoader()
            })
    }

    addListener() {
        this._qsAll('button').forEach(item => {
            item.addEventListener('click', () => this.getData(item.id))
        })
    }

    async getData(table) {
        this.setLoader()
        await axios.get(`${this.host}/dev/data/${table}`)
            .then(res => {
                let table = ''
                res.data.forEach(element => {
                    const head = Object.keys(element).map((key) => [key])
                    this._qs('.header').innerHTML = ''
                    head.forEach(head => {
                        this._qs('.header').innerHTML += `<th>${head[0]}</th>` 
                    })
                    const data = Object.keys(element).map((key) => [element[key]])
                    table +=  `<tr>`
                    data.forEach(row => {
                        table +=  `<td>`
                        row.forEach(cell => {
                            table +=  cell
                        })
                        table +=  `</td>`
                    })
                    table +=  `</tr>`
                })
                this._qs('.tabel-data').innerHTML = table
                this.stopLoader()
            })
            .catch(err => {
                this.stopLoader()
                console.log(err)
            })
    }

    connectedCallback() {

    } //End of connectedCallback

} //End of Class


window.customElements.define('dev-dev', Dev)