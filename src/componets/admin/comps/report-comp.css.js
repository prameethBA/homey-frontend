export default CSS = `

.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 6rem auto 5rem auto;
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

tr > td:last-child {
    display: flex;
    padding: 0 !important;
    width: 100%;
    height: 100%;
}

tr > td:last-child > button {
    width: 100%;
    margin: 3px;
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
    margin: 5rem auto auto auto;
}

.pagination a {
    color: blue;
    cursor: pointer;
}

`
