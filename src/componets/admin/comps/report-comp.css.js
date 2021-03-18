export default CSS = `

.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.report-comp {
    width: 100%;
    justify-content: center;
    display: flex;
}

#report-comp-table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 90%;
}

#report-comp-table td, #report-comp-table th {
    border: 1px solid #ddd;
    padding: 8px;
}

th, td {
    display: table-cell;
    cursor: cell;
}

#report-comp-table tr:nth-child(even){background-color: #f2f2f2;}

#report-comp-table tr:hover {background-color: #ddd;}

#report-comp-table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
}    

button {
    height: 2rem;
    border-radius: 2px;
    outline: none;
    border: none;
    font-size: 0.8rem;
    color: #fff;
    cursor: pointer;
    transition: all 1s;
    width: 45%;
    width: 100%;
  }

.danger-button {
    background-image: linear-gradient(to right top, #870f0f, #981010, #a91011, #ba1111, #cc1111);
}

.danger-button:hover {
    box-shadow: 1px 1px 10px 3px rgba(204,17,17,1);
}

.primary-button {
    background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
}

.primary-button:hover {
    box-shadow: 1px 1px 10px 3px rgba(50,190,143,1);
}

a {
    transition: all 0.5s ease;
}

.user-link {
    cursor: pointer;
    text-decoration: underline;
    color: #3543bf;
}

.ad-link {
    cursor: pointer;
    color: #03077F;
    text-transform: capitalize;
    font-style: italic;
}

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
}

`
