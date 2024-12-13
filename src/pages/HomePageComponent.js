import React, { useEffect, useState } from 'react'
import ProductService from '../service/ProductService'
import {Link} from 'react-router-dom';

export default function HomePageComponent() {
  const [productarr, setproductarr] = useState([]);
  const [searcharr, setsearcharr] = useState([]);
  const [searchtext, setsearchtext] = useState("");

  useEffect(() => {
    if (searchtext === "") {
      setsearcharr([...productarr]);
    } else {
      let newarr = productarr.filter(p => p.pname.includes(searchtext));
      setsearcharr(newarr);
    }
  }, [productarr, searchtext])

  useEffect(() => {
    fetchdata();
  }, [])

  const fetchdata = () => {
    ProductService.getAllProducts()
      .then((response) => {
        setproductarr(response.data.data);
      }).catch((err) => {
        console.log(JSON.stringify(err));
      })
  }

  const handlesearch = (event) => {
    setsearchtext(event.target.value)
  }

  const deleteproduct = (pid)=>{
    ProductService.deleteByID(pid)
    .then((response)=>{
       fetchdata();
    }).catch((err)=>{
      console.log(JSON.stringify(err));
    })
  }

  return (
    <div>
      <Link to="/form"> 
      <button type='button' name='addproduct' id='addproduct'>Add new Product</button>
      </Link>
      <br></br> <br></br>
      Search : <input type='text' name='search' id='search' value={searchtext} onChange={handlesearch}></input>
      <br></br> <br></br>
      <table border='2px' cellPadding='10px' cellSpacing='2px'>
        <thead>
          <tr>
            <th>pid</th>
            <th>pname</th>
            <th>price</th>
            <th>qty</th>
            <th>cid</th>
            <th>sid</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {searcharr.map(p => <tr key={p.pid}>
            <td>{p.pid}</td>
            <td>{p.pname}</td>
            <td>{p.price}</td>
            <td>{p.qty}</td>
            <td>{p.cid}</td>
            <td>{p.sid}</td>
            <td>
              <Link to={`/edit/${p.pid}`} state={{pobj:p}}>
              <button type='button' name='edit' id='edit'>edit</button>
              </Link> &nbsp;&nbsp;&nbsp;
              <button type='button' name='delete' id='delete' onClick={()=>{deleteproduct(p.pid)}}>delete</button> &nbsp;&nbsp;&nbsp;
              <button type='button' name='view' id='view'>view</button>
            </td>
          </tr>)}
        </tbody>
      </table>
    </div>
  )
}
