export default CSS = `
.heading {
  flex: 1;
  padding: 0.1rem;
}

.heading h1 {
  margin-bottom: 0.2em;
  font-family: Comic Sans MS;
  font-size: 50px;
  text-align: center;
}

.tab-button {
  border: none;
  border-color: #239710;
  background-color: #ff9900;
  padding: 10px 30px;
  text-align: center;
  text-decoration: none;
  margin: 1.5em;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.tab-button:hover {
  border-color: rgb(149, 192, 169);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24);
}

.new-post-button {
  float: right;
  background-color: #239710;
  border-color: transparent;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 3em;
  padding-right: 3em;
  padding-top: calc(0.5em - 1px);
  border-radius: 0.5em;
  margin: 1.5em;
}

.new-post-button div:hover {
  background-color: #021b16;
  color: white;
}

.tags {
  padding: 5px;
  background-color: #39b54a;
  border: 2px solid #06070669;
  border-radius: 30px;
  place-items: center;
  justify-content: center;
  flex: 15%;
}

.tags ul {
  list-style-type: none;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 0;
  width: 70%;
}

.tags li a {
  border-radius: 50px;
  background-color: #b3dbd3;
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
  line-height: 72px;
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
  border: none;
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

@media (max-width: 800px) {
  .container {
      flex-direction: column;
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
