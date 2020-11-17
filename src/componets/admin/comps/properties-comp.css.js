export default CSS = `

    #container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin: 5rem auto 5rem auto;
    }

    .row {
        flex-direction: row;
        flex-wrap: nowrap;
        width: 100%;
        justify-content: center;
        align-items: center;
    }

    .search-container {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
       }
    
      .search-container label {
        cursor: pointer;
      }
    
      .search {
        min-width: 30%;
        height: 1.5rem;
        outline: none;
        border: solid 1px;
        border-radius: 1rem;
        text-align: center;
        transition: all 1s ease-in-out;
      }
    
    .content {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    property-view {
        display: flex;
        width: 20rem;
    }
    
    .pagination {
        margin: 0.1rem auto 2rem auto;
        display: table;
    }
    
    .pagination a {
        color: blue;
        cursor: pointer;
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
        width: 45%;
      }
    
      .danger-button {
        background-image: linear-gradient(to right top, #870f0f, #981010, #a91011, #ba1111, #cc1111);
      }
    
      .danger-button:hover {
        box-shadow: 1px 1px 10px 3px rgba(204,17,17,1);
      }
    
      .primary-button {
          background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
      }
    
      .primary-button:hover {
          box-shadow: 1px 1px 10px 3px rgba(50,190,143,1);
      }
    
      .button-group > button {
          width: 10rem;
          margin: 0.5rem auto;
      }
    
      .button-group {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
    
      .button-group-user {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
      }
    
      .button-group-user > button {
        margin: 0.4rem auto;
       }

`
