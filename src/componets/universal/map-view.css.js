export default CSS = `

.container {
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 25rem;
}

#map {
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    overflow: hidden;
  }

  .gmnoprint {
    display: none;
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
    margin: 1rem 0;
  }

`