export default CSS =`
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


    .account-card {
        width: 20rem;
        height: auto;
        box-shadow: 1px 1px 8px 1px rgba(0,0,0,0.75);
        justify-content: center;
        align-items: center;
        margin: 1rem;
        background: #ffffff;
        border-radius: 3px;
    }  

    .account-card div {
        margin: 1rem;
        width: 100%;
        justify-content: center;
        text-align: center;
    }

    .name {
        margin: 1rem;
        font-size: 1.5rem;
    }

    button {
        height: 2rem;
        border-radius: 1rem;
        outline: none;
        border: none;
        font-size: 0.8rem;
        color: #fff;
        cursor: pointer;
        transition: all 1s;
        width: 45%;
      }
    
      .danger {
        background-image: linear-gradient(to right top, #870f0f, #981010, #a91011, #ba1111, #cc1111);
        width: 30%;
        margin: 0 1rem;
      }
    
      .danger:hover {
        box-shadow: 1px 1px 10px 3px rgba(204,17,17,1);
      }
    
      .success {
          background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
          width: 15%;
      }
    
      .success:hover {
          box-shadow: 1px 1px 10px 3px rgba(50,190,143,1);
      }

      .show-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 75%;
        height: 1.2rem;
        color: #000000;
        margin: auto 1rem;
      }

      .account-number {
        align-items: center;
      }

      .active {
        background-image: linear-gradient(to right top, #ff7e00, #ff7809, #ff7211, #ff6b17, #ff651c);
        color: #ffffff;
    }
`