export default CSS = `
    .backdrop {
        position: fixed;
        overflow: auto;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0, 0.7);
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 0.5s ease-in-out;
    }

    .backdrop::-webkit-scrollbar {
      width: 0;
    }

    .container {
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        min-width: 60%;
        min-height: 60%;
        padding: 2.5rem;
        border-radius: 2px;
        max-width: 90%;
        transition: all 0.5s ease-in-out;
        position: absolute;
        
    }
    

    #close-popup {
        color: #444444;
        font-size: 3rem;
        transform: rotate(45deg);
        cursor: pointer;
        position: absolute;
        right: 2%;
        top: 0;
    }

    .row {
        margin: 1rem 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .column {
      display: flex;
      flex-direction: column;
    }

    .report-app{
      display:flex;
      flex-direction:row;
    }
    .report-details{
      padding: 3rem;
      width:50%
    }

    .report-coloumn{
      display: flex;
      padding: 1.5em;
      flex-direction:coloumn;
      border: solid 1px black;
      
    }
    .property-details{
      border: solid 1px red;
      margin: 3rem;
      width:50%
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
      width: 25%;
    }

    .buttons{
      display:flex;
      flex-flexDirection: row;
      justify-content: space-evenly;
    }

    #ban{
      background-color:orange;
    }
    #delete{
      background-color:red;
    }
    #ignore{
      background-color:green;
    }
  

`