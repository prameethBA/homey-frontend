const search = `
    .search {
        margin: 5rem 0rem 0rem 0rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 100%;
        height: 4rem;
        background: #ffffff;
    }

    .search-box {
        width: 40%;
        margin: auto 1rem;
        border-radius: 1rem;
        height: 2rem;
        outline: none;
        justify-content: center;
        display: flex;
        text-align: center;
    }

    .toggle-filter {
        font-size: 2rem;
        cursor: pointer;
    }
`

const filter = `

    input[type=text]{
        width: 4em;
        height: 2.05em;
    }
    .nav_container{
        background: #ffffff;
    }

    .column {
        display: flex;
        flex-direction: column;
    }

    .row {
        display: flex;
        flex-direction: row;
    }

    .left_nav{
        display: none;
        justify-content: space-evenly;
        flex-direction: row;
        flex-wrap: wrap;
        background-color: #ffffff;
        transition: all 0.5s ease;
        z-index: 0;
        position: relative;
    }

    .left_nav::-webkit-scrollbar {
        width: 0;
    }

    .filter-items {
        margin: 0.5rem;
    }

    .filter-item {
        margin: 0.2rem 1rem;   
    }

    h3{
        margin: 0;
        padding: 10px;
        z-index: 1;
        background-image: linear-gradient(to right top, #ff9900, #f69d14, #eea122, #e6a42d, #dea738);		
    }

    .nav_container > dir{
        padding: 0.4rem;
        width: 0.9rem;
        height: 0.9rem;
        margin-top: -1rem;
        margin-left: 1rem;
        transform: rotate(45deg);
        background-image: linear-gradient(to right top, #ff9900, #f69d14, #eea122, #e6a42d, #dea738);
    }

    input[type="chechbox"], label {
        cursor: pointer;
    }

    .price, .filter-select {
        justify-content: space-around;
        align-items: center;
        margin-bottom: 1rem;
    }

    select, button {
        position: relative;
        height: 2rem;
        border-radius: 1rem;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
        font-size: 0.8rem;
        color: #fff;
        text-transform: uppercase;
        cursor: pointer;
        transition: all 1s;
        margin: 0.2rem;
    }

    select:hover, button:hover{
        background-position: right;
        color: black;
    }
    
    select{
    width: 10em;
    height: 2em;
    border-radius: 5px;
    }
    input:checked{
        color: #ff4000;
    }
    :checked{
        color: #ff4000;
    }
    input[type="chechbox"]:checked{
        box-shadow: 0 0 0 2px #ff4000;
    }
`

export default CSS = `
    ${filter}
    ${search}
    #container {
    display: grid;
    justify-content: center;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, 20rem);
    overflow-x: auto;
    }

    #container::-webkit-scrollbar {
        height: 0;
    }

    property-view {
        margin: 0.5rem;
    }

    .pagination {
        margin: 0.1rem auto 2rem auto;
        display: table;
    }

    .pagination a {
        color: blue;
        cursor: pointer;
    }

    @media screen and (max-width: 1200px) {

    }

    @media screen and (max-width: 992px) {

    }

    @media screen and (max-width: 768px) {

    }

    @media screen and (max-width: 512px) {
        #container {
            display: flex;
            overflow: scroll;
        }
    }

`
