export default CSS = `
.container {
  display: inline-flex;
  box-shadow: -1px -1px 5px 0px rgba(0,21,62,0.8);
  margin: 1rem;
  cursor: pointer;
  transition: all 0.5s;
  background-color: rgba(255,255,255, 0.9);
  margin-top: 5rem;
}

.container div {
  padding: 0;
} 

::slotted(img) {
  width: 20vw;
  height: 30vw;
}

::slotted(h1) {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem;
  width: 20vw;
  font-size: 4vw;
  text-align: end;
}

.container:hover {
  box-shadow: -1px -1px 4px 3px rgba(0,62,21,0.8);
}

@media screen and (max-width: 1200px) {
.container {
  margin-top: 4rem;
}
}

@media screen and (max-width: 992px) {
.container {
  margin-top: 3rem;
}

::slotted(h1) {
  margin: 3rem 0.1rem 0 1rem;
}
}

@media screen and (max-width: 768px) {
.container {
  margin-top: 2rem;
}

::slotted(img) {
  width: 30vw;
  height: 40vw;
}

}

@media screen and (max-width: 512px) {
.container {
  margin-top: 1rem;
}

::slotted(h1) {
  margin: 1rem 0.1rem 0 1rem;
}
}

`
