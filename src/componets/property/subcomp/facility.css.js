export default CSS = `

.container {
    display: grid;
    grid-template-columns: auto 15% 10%;
    margin: 0.5rem;
}

  .container > label {
      cursor: pointer;
  }

  .container .checkbox {
      display: none;
      cursor: pointer;
  }

  .checkmark {
      position: absolute;
      height: 20px;
      width: 20px;
      background-color: transparent;
      border-radius: 50%;
      border: solid 2px #bf2110;
      transition: all 1s;
      transform: translateX(-2rem);
  }

  .container .checkbox:checked ~ .checkmark {
      background-color: #32be8f;
      border: solid 2px #327c0f;
  }

  .checkmark:after {
      content: "";
      display: none;
      margin: 2px 0 0 6px;
  }

  .container .checkbox:checked ~ .checkmark:after {
      display: block;
  }

  .container .checkmark:after {
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 3px 3px 0;
      transform: rotate(45deg);
  }

  .disabled {
    border: none;
    pointer-events: none;
    padding: 0.3rem;
  }

  .quantity {
    text-align: center;
  }

  input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    input[type="number"] {
        -moz-appearance: textfield;
    }

`
