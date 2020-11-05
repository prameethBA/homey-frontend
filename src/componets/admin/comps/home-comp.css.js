export default CSS = `

    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 5rem auto 5rem auto;
    }

    .pending-approval {
        width: 100%;
        justify-content: center;
        display: flex;
    }

    #pending-approval-table {
        font-family: Arial, Helvetica, sans-serif;
        border-collapse: collapse;
        width: 90%;
    }
    
    #pending-approval-table td, #pending-approval-table th {
        border: 1px solid #ddd;
        padding: 8px;
    }
    
    #pending-approval-table tr:nth-child(even){background-color: #f2f2f2;}
    
    #pending-approval-table tr:hover {background-color: #ddd;}
    
    #pending-approval-table th {
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

    button {
        height: 2rem;
        border-radius: 2px;
        outline: none;
        border: none;
        font-size: 0.8rem;
        color: #fff;
        text-transform: uppercase;
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