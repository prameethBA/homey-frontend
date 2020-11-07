export default CSS = `
    .container {
      margin: 5rem auto;
      display: flex;
      flex-direction: row;
    }

    .images {
      width: 75%;
      margin: 2rem;
    }

    img {
      cursor: zoom-in;
    }

    .main-image-container {
      width: 100%;
    }

    .main-image {
      width: 100%;
      border: 0.5rem solid #ffffff;
      border-radius: 2px;
    }

    .sub-images {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    .sub-image {
      width: 20%;
      border: 0.1rem solid #ffffff;
      border-radius: 2px;
    }

    .price {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .details {
      margin: 2rem;
    }

    .details .row {
      margin: 0 0 1rem 0;
    }

    .rwo-title {
      display: flex;
      justify-content: space-between;
    }

    .title {
      font-weight: bold;
      font-size: 1.2rem;
    }

    .row-status {
      display: flex;
      justify-content: space-around;
    }

    .description {
      font-size: 0.9rem;
      line-height: 1rem;
      max-height: 3rem;
      overflow: hidden;
      text-align: justify;
    }

    .description::first-line {
      text-indent: 1rem;
    }

    .features {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      flex-wrap: wrap;
    }
    
    .contact-info {
      display: flex;
      justify-content: flex-end;
    }

    .contace-info a {
      text-transform: lowercase;
      color: #2206f7;
      text-decoration: underline;
      cursor: pointer;
    }

    .action {
      display: flex;
      justify-content: space-around;
      margin-top: 5rem;
    }

    button {
      width: 30%;
      height: 2.5em;
      border-radius: 2rem;
      outline: none;
      border: none;
      background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
      font-size: 1.2rem;
      color: aliceblue;
      text-transform: uppercase;
      margin: 2rem auto;
      cursor: pointer;
      transition: all 1s;
  }

  button:hover{
      box-shadow: 1px 1px 5px 0px rgba(0,62,21,0.8);
  }

  .reserve {
    background-image: linear-gradient(to right top, #133b77, #00398e, #0036a3, #002eb6, #1520c6);
  }

  .feedback {
    background-image: linear-gradient(to right top, #aa7c0e, #ad7308, #af6906, #b15f08, #b3540d);
  }

  `