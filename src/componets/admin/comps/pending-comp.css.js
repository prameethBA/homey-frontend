export default CSS = `

    .container {
        display: flex;
        justify-content: center;
        flex-direction: column;
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
        text-align: center;
        background-color: #239710;
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
        font-weight: bold;
        position: relative;
    }

    .ad-link:hover {
        color: #23178e;
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
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
        transition: all 1s;
        position: relative;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        margin: 2rem;
        justify-content: space-evenly;
    }

    .row span {
        font-weight: unset;
        color: #4212ff;
    }

    .row span > a {
        text-decoration: underline;
        cursor: pointer;
    }

    map-view {
        display: flex;
        justify-content: center;
    }


    .pagination {
        margin: 5rem auto 1rem auto;
        font-family: monospace;
        font-size: 1.2rem;
        background-color: #001f3f;
        border-radius: 3rem;
        display: flex;
        width: 50%;
        align-content: space-around;
        align-items: center;
        flex-direction: row;
        height: 2rem;
    }
    
    .pagination > div {
        color: #ffffff;
        cursor: pointer;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: 1px solid #ffffff;
    }
  
    .pagination > div:hover {
        background-color: darkorange;
    }
  
    .pagination > div:last-child {
        border-top-right-radius: 2rem;
        border-bottom-right-radius: 2rem;
    }
  
    .pagination > div:first-child {
        border-top-left-radius: 2rem;
        border-bottom-left-radius: 2rem;
    }
  
    .pagination-active{
        background-color: darkorange;
        font-weight: bold;
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
