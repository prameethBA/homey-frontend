export default CSS = `
.pagination {
    margin: 5rem auto 1rem auto;
    font-family: monospace;
    font-size: 1.2rem;
    background-color: #001f3f;
    border-radius: 3rem;
    display: flex;
    width: 50%;
    align-content: space-around;
    align-items: center;
    flex-direction: row;
    height: 2rem;
}

.pagination > div {
    color: #ffffff;
    cursor: pointer;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #ffffff;
}

.pagination > div:hover {
    background-color: darkorange;
}

.pagination > div:last-child {
    border-top-right-radius: 2rem;
    border-bottom-right-radius: 2rem;
}

.pagination > div:first-child {
    border-top-left-radius: 2rem;
    border-bottom-left-radius: 2rem;
}

.pagination-active{
    background-color: darkorange;
    font-weight: bold;
}
`