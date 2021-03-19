export default CSS = `
.heading {
  flex: 1;
  padding: 0.1rem;
  margin-top: 3rem;
}

.heading h1 {
  margin-bottom: 0.2em;
  font-family: monospace;
  font-size: 50px;
  text-align: center;
}

.tab-button {
  border: none;
  border-color: #239710;
  background-color: #ff9900;
  text-align: center;
  text-decoration: none;
  margin: 0 1.5rem;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.tab-button:hover {
  border-color: rgb(149, 192, 169);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24);
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.tags {
    padding: 5px;
    background-color: #39b54a;
    border: 2px solid #06070669;
    border-radius: 30px;
    place-items: center;
    justify-content: center;
    flex: 30%;
    margin: 1rem;
    height: 100%;
}

.tags ul {
  list-style-type: none;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 0;
  width: 70%;
  display: flex;
  flex-direction: column;
}


.tags li a {
  border-radius: 50px;
  background-color: #ff9900;
  display: block;
  color: #000;
  padding: 9px 36px;
  margin-bottom: 2em;
  text-decoration: none;
}

.tags li a:hover {
  background-color: #138D75;
  color: white;
}

.tags-txt {
  color: #020202;
  font-family: 'Raleway', sans-serif;
  font-size: 38px;
  font-weight: 800;
  margin: 0px 0 26px;
  text-align: center;
  text-transform: uppercase;
}

.user-image {
  width: 4rem;
  margin-top: 1.5em;
  padding: 0;
}

.textarea {
    display: inline-flex;
    width: 100%;
    height: 1.5rem;
    border: none;
    border-radius: 0.2rem;
    text-indent: 0.2rem;
}

.container {
  display: flex;
  align-self: center;
  justify-content: center;
  margin-right: 1.5em;
  margin-top: 1em;
}

.post-container {}

.posts {
  flex: 85%;
  padding-right: 2px;
  margin-left: 3em;
}

.post-row {}

button{
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-wrap: wrap;
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
