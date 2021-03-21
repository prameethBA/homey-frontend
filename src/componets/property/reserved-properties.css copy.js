const notFound = `
.notFound {display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 58vh;}
`

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
      display: inline-flex;
      flex-wrap: wrap;
    }

    property-view {
      width: 20rem;
      margin: 1rem;
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

  

${notFound}

`
