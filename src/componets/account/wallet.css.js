export default CSS = `
  .container {
    margin: 5rem 0;
  }
  
  .row {
    display: flex;
    flex-direction: row;
  }

  .column {
    display: flex;
    flex-direction: column;
    width: 70%;
  }

  .cards {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
    .card {
      width: 25rem;
      position: relative;
      height: 25rem;
      perspective: 150rem;
  }
    .card__side {
      position: absolute;
      top: 10%;
      left: 10%;
      width: 60%;
      height: 20em;
      backface-visibility: hidden;
      transition: all 0.6s ease;
      box-shadow: 1em 1em 2em rgba(0, 0, 0, .2);
  }
    .card__side--front {
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 1px 1px 8px 1px rgba(0,0,0,0.75);
      text-align: center;
  }
    .card__side--back {
      color: #fff;
      transform: rotateY(180deg);
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
  }
    .card__side--back-1 {
      background-image: linear-gradient(to right bottom, #ffb900, #ff7730);
  }
    .card__side--back-2 {
      background-image: linear-gradient(to right bottom, #2998ff, #5643fa);
  }
    .card__side--back-3 {
      background-image: linear-gradient(to right bottom, #ffb900, #ff7730);
  }
  .card__side--back-4 {
      background-image: linear-gradient(to right bottom, #2998ff, #5643fa);
  }
    .card:hover .card__side--front {
      transform: rotateY(-180deg);
  }
    .card:hover .card__side--back {
      transform: rotate(0);
  }
    .card__description {
      text-transform: uppercase;
      font-size: 2em;
      padding: 1em 0;
  }
  .card__description_2 {
      font-size: 12px;
  }
  
  button{
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
  
      display: inline-block;
      width: 10em;
      height: 3em;
      border-radius: 25px;
      outline: none;
      border: none;
      background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
      font-size: 1rem;
      color: #fff;
      margin: 0.9rem;
      cursor: pointer;
      transition: all 0.5s;
      min-width: 15%;
  }
  
  button:hover{
      cursor: pointer;
      background-position: right;
      color: black;
      box-shadow: 0 0 20px -5px;
  }
`
