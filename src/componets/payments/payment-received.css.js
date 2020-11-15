export default CSS = `
    .container {
        display: flex;
        margin-top: 5rem;
    }   

    .column {
        display: flex;
        flex-direction: column;
    }

    .row {
        display: flex;
        flex-direction: row;
    }

    .left-nav {
        margin: 1rem;
        background-color: #ffffff;
        border-radius: 2px;
        box-shadow: 1px 1px 2px 1px rgba(0,0,0,0.75);
    }

    .left-nav > div {
        padding: 1rem;
        cursor: pointer;
        transition: all 0.5s ease;
    }

    .left-nav > div:hover {
        background-image: linear-gradient(to right top, #ff7e00, #ff7809, #ff7211, #ff6b17, #ff651c);
        color: #ffffff;
    }

    .active {
        background-image: linear-gradient(to right top, #ff7e00, #ff7809, #ff7211, #ff6b17, #ff651c);
        color: #ffffff;
    }

    .content {
        width: 100%;
        margin-top: 1rem;
    }

    .received {
        width: 100%;
        justify-content: center;
        display: flex;
    }

    #received-table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 90%;
    }

    #received-table td, #received-table th {
        border: 1px solid #ddd;
        padding: 8px;
    }

    #received-table tr:nth-child(even){background-color: #f2f2f2;}

    #received-table tr:hover {background-color: #ddd;}

    #received-table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #4CAF50;
        color: white;
    }    

    a {
        transition: all 0.5s ease;
        color: blue;
        cursor: pointer;
        text-decoration: underline;
    }

`
