export default CSS = `
    .post-row{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-right: 25%;
    }
    #delete-comment{
      width: 2rem;
      height: 1.5rem;
      background-image: none;
      border: solid black 1px;
      font-size: 1em;
      margin: 1.5em 1em 0em 0em;
    }
    @media(max-Width:500px){
        .forum-row{
          flex-direction:coloumn;
        } 
      }

`