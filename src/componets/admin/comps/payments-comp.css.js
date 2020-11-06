export default CSS = `
.block .container {
    position: relative;
    display: inline-block;
    width: 400px;
    height: 300px;
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.86);
    margin: 2em;
    background-color: rgba(300,300,300,0.5);
    
}
.block .container:hover {
    box-shadow: 0 0 25px -5px;
}

.details {
    
    background-color: rgba(200, 200, 200, 1);
    padding-bottom: 50px;
}

span {
    margin: auto;
}

.description {
    margin: 0.5em;
    height: 5em;
    text-align: justify;
}
.heading{
  text-align: center;;
}

button {
    font-weight: bold;
    font-size: 1.1em;
    border:none;
    border-radius: 2px;
    padding: 0.3em;
    display: inline;
    margin:0.1em;
    color: #eeeeee;
    cursor: pointer;
}
button:hover{
    cursor: pointer;
    background-position: right;
    color: black;
    box-shadow: 0 0 20px -5px;
}
.continue{
  position: absolute;
  font-size: 1.5em;
  background-color: rgba(12, 164, 44, 0.8);
}
.payment-history-heading {
  text-align: center;
  font-size: 2.5em;
}
.heading{
  font-size:1.5em;
}

`