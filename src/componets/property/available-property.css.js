export default CSS = `
#container {
   display: grid;
   justify-content: center;
   grid-gap: 10px;
   grid-template-columns: repeat(auto-fill, 20rem);
   overflow-x: auto;
   margin-top: 5rem;
}

#container::-webkit-scrollbar {
    height: 0;
}

property-view {
    display: inline-block;
}

.pagination {
    margin: 0.1rem auto 2rem auto;
    display: table;
}

.pagination a {
    color: blue;
    cursor: pointer;
}

@media screen and (max-width: 1200px) {

}

@media screen and (max-width: 992px) {

}

@media screen and (max-width: 768px) {

}

@media screen and (max-width: 512px) {
    #container {
        display: flex;
        overflow: scroll;
    }
}

`