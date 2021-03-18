export default CSS = `

.container {
    display: flex;
    flex-direction: column;
    height: 25rem;
    position: relative;
}

#map {
    height: 100%;
    display: block;
    position: relative;
    overflow: hidden;
  }

  #pac-input {
    right: 0;
    width: 50%;
    height: 1.5rem;
    border-radius: 1rem;
    text-indent: 1rem;
    outline: none;
    display: none;
    top: 1rem !important;
  }

  .gmnoprint, .gm-style-cc {
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
