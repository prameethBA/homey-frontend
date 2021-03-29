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
  text-align: center;
  text-decoration: none;
  margin: 0 1.5rem;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
}

.tab-button:hover {
    cursor: pointer;
  background-color: #001f3f;
  color: rgb(255, 255, 255);
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24);
}

.container {
  display:flex;
}

.buttons {
  display: flex;
  justify-content: space-between;
}

.tags {
    padding: 5px;
    background-color: #064e9c;
    border-radius: 20px;
    border: 2px solid #06070669;
    place-items: center;
    justify-content: center;
    
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
  background-color: #001f3f;
  display: block;
  color: white;
  padding: 9px 36px;
  margin-bottom: 2em;
  text-decoration: none;
}

.tags li a:hover {
    cursor: pointer;
    background-color:#ff9900 ;
    background-position: right;
    color: rgb(250, 250, 250);
    box-shadow: 0 0 20px -5px;
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
.forum-post{
  width: 100%;
  margin: 1em 8em 1em 8em;
}
.post-row{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 50%;
}


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
  .justify-text{
    margin-left:10%;
  }
  #delete-comment{
    width: 2rem;
    height: 1.5rem;
    background-image: none;
    border: solid black 0px;
    font-size: 1em;
    border-radius:0;
    margin: 1.5em 1em 0em 0em;
  }
@media(max-Width:800px){
  .forum-post {
    margin: 1em 1em 1em 1em;
  } 
  .post-row{
    margin-right:20%;
  }
}
@media(max-Width:600px){
  .tab-button {
    margin: 0px 0.5rem;
  }
}


`