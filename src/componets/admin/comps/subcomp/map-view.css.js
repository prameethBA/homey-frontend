export default CSS = `

.container {
    display: flex;
    flex-direction: column;
}

#map {
    display: none;
    min-width: 50vw;
    width: 100%;
    min-height: 50vh;
    height: 100%;
    margin: 0;
  }

  .gmnoprint {
    display: none;
  }

  #pac-input {
    display: none;
    z-index: 0;
    position: absolute;
    margin: 1rem;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(0, 0, 0);
    width: 75%;
    left: 20px;
    top: 0px;
    color: #000000;
  }

  button {
    height: 2rem;
    border-radius: 2px;
    outline: none;
    border: none;
    color: #fff;
    cursor: pointer;
    background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
    transition: all 1s;
    margin: 1rem;
  }

`