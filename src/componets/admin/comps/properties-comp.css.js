export default CSS = `

    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 5rem auto 5rem auto;
    }

    .properties-comp {
        width: 100%;
        justify-content: center;
        display: flex;
    }

    #properties-comp-table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 90%;
    }
    
    #properties-comp-table td, #properties-comp-table th {
        border: 1px solid #ddd;
        padding: 8px;
    }
    
    #properties-comp-table tr:nth-child(even){background-color: #f2f2f2;}
    
    #properties-comp-table tr:hover {background-color: #ddd;}
    
    #properties-comp-table th {
        padding-top: 12px;
        padding-bottom: 12px;
        text-align: left;
        background-color: #4CAF50;
        color: white;
    }    

    a {
        transition: all 0.5s ease;
    }

    .user-link {
        cursor: pointer;
        text-decoration: underline;
        color: #3543bf;
    }

    .ad-link {
        cursor: pointer;
        color: #03077F;
        text-transform: capitalize;
        font-style: italic;
    }

    .ad-link:hover {
        #0077cc;
    }
    .btn-approve, .btn-reject{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;

        display: inline-block;
        height: 3em;
        border-radius: 25px;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
        font-size: 0.8rem;
        color: #fff;
        margin: 0.5rem;
        cursor: pointer;
        transition: all 0.5s;
        min-width: 15%;
    }
    .btn-approve{
        margin-left: 30%;
    }

    .btn-approve:hover{
        cursor: pointer;
        background-position: right;
        color: black;
        box-shadow: 0 0 20px -5px;
    }
    .btn-reject:hover{
        cursor: pointer;
        background-position: right;
        color: black;
        box-shadow: 0 0 20px -5px;
    }

    button {
        height: 2rem;
        border-radius: 2px;
        outline: none;
        border: none;
        font-size: 0.8rem;
        color: #fff;
        cursor: pointer;
        transition: all 1s;
    }

    .pagination {
        margin: 5rem auto auto auto;
    }

    .pagination a {
        color: blue;
        cursor: pointer;
    }
    
    .approve-button {
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
    }

    .approve-button:hover {
        box-shadow: 1px 1px 10px 3px rgba(50,190,143,1);
    }

    .decline-button {
        background-image: linear-gradient(to right top, #870f0f, #981010, #a91011, #ba1111, #cc1111);
    }

    .decline-button:hover {
        box-shadow: 1px 1px 10px 3px rgba(204,17,17,1);
    }

`