export default CSS = `
  .container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 7rem auto 5rem auto;
    transition: all 1s ease-in-out;
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
    width: 15rem;
    height: 1.5rem;
    outline: none;
    border: solid 1px;
    border-radius: 1rem;
    text-align: center;
    transition: all 1s ease-in-out;
  }

  .create-new {
    margin: auto 5rem;
    cursor: pointer;
    transition: all 1s ease-in-out;
  }

  .sub-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.5rem auto;
  }

  .display-picture {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    border: solid #ffffff 2px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
  }

  .name {
    font-size: 1.5rem;
    font-weight: bold;
    font-family: inherit;
  }

  .status {
    font-size: 0.8rem;
  }

  .email, .mobile {
    margin: 0.2rem;
    font-size: 0.9rem;
  }

  .sub-row:last-child {
    flex-direction: row;
    justify-content: space-between;
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

  .remove, .change-status {
    background-image: linear-gradient(to right top, #870f0f, #981010, #a91011, #ba1111, #cc1111);
  }

  .remove:hover, .change-status:hover {
    box-shadow: 1px 1px 10px 3px rgba(204,17,17,1);
  }

  .create-new {
      background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
      width: 15%;
  }

  .create-new:hover {
      box-shadow: 1px 1px 10px 3px rgba(50,190,143,1);
  }

  .profile{
    display: flex;
    width: 17.5rem;
    height: 25rem;
    margin: 1rem;
    position: relative;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    transition: all 1s ease-in-out;
    background-color: #ffffff;
    border-radius: 2px;
    box-shadow: 0px 0px 5px 1px rgba(0,0,0,0.75);
    cursor: pointer;
    position: inherit;
  }

  .admins {
    display: flex;
    flex-wrap: wrap;
  }

  

`
