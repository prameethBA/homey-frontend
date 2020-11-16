export default CSS = `

.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 6rem 5rem;
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.card  {
    display: flex;
    flex-direction: column;
    box-shadow: 1px 1px 8px 1px rgba(0,0,0,0.75);
    height: 10rem;
    width: 15rem;
    justify-content: space-around;
    margin: 1rem auto;
}

.card > div {
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    align-items: center;
}

.card-value {
    font-size: 2rem;
}

 rect {
    fill: #ffffff;
 }

 .chart_div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
 }

//  .chart-container {
//     display: flex;
//     justify-content: center;
//     align-items: center;
//  }

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

#report-comp-table tr:nth-child(even){background-color: #f2f2f2;}

#report-comp-table tr:hover {background-color: #ddd;}

#report-comp-table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
    background-color: #4CAF50;
    color: white;
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
.btn-approve, .btn-reject{
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    display: inline-block;
    height: 3em;
    border-radius: 25px;
    outline: none;
    border: none;
    background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
    font-size: 1rem;
    color: #fff;
    margin: 0.5rem;
    cursor: pointer;
    transition: all 0.5s;
    min-width: 15%;
}
.btn-approve{
    margin-left: 30%;
}

.btn-approve:hover{
    cursor: pointer;
    background-position: right;
    color: black;
    box-shadow: 0 0 20px -5px;
}
.btn-reject:hover{
    cursor: pointer;
    background-position: right;
    color: black;
    box-shadow: 0 0 20px -5px;
}

button {
    height: 1.2rem;
    border-radius: 1rem;
    outline: none;
    border: none;
    font-size: 0.8rem;
    color: #fff;
    cursor: pointer;
    transition: all 1s;
}

.pagination {
    margin: 5rem auto auto auto;
}

.pagination a {
    color: blue;
    cursor: pointer;
}

.success {
    background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
}

.success:hover {
    box-shadow: 1px 1px 10px 3px rgba(50,190,143,1);
}

.danger {
    background-image: linear-gradient(to right top, #870f0f, #981010, #a91011, #ba1111, #cc1111);
}

.danger:hover {
    box-shadow: 1px 1px 10px 3px rgba(204,17,17,1);
}


`
