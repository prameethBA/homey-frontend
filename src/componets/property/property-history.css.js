export default CSS = `
    .container {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    width:100%;
    }

    .heading{
    text-align: center;
    }

    .property-history-heading h1{
    text-align: center;
    }

    .property-history-heading {
    text-align: center;
    font-size: 2.5em;
    }


    .row {
    display: flex;
    width: 90%;
    height: 80px;
    
    }

    .row > div {
    text-align: center;
    font-size: 25px;
    display: inline-block;
    margin: 0 6vw;
    }

    .row > div:nth-child(1) {
    color: red;
    height: 80px;
    width: 100px;
    }

    .row > div:nth-child(2) {
    color: green;
    position: relative;
    top: 1em;
    height: 80px;
    width: 200px;
    }

    .row > div:nth-child(3) {
    color: blue;
    position: relative;
    top: 1em;
    height: 80px;
    width: 160px;
    }

    .row > div:nth-child(4) {
    color: #ff08e1;
    position: relative;
    top: 1em;
    height: 80px;
    width: 220px;
    }

    select {
    width: 65%;
    padding: 15px 30px;
    border: none;
    border-radius: 14px;
    color: white;
    background-color: #8842d5; 
    }
`