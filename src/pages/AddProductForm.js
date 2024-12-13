import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ProductService from '../service/ProductService';

export default function AddProductForm() {

 const navigate = useNavigate();
 const [formdetails, setformdetails] = useState({ pid: '', pname: '', price: '', qty: '', cid: '', sid: '' });
 const [errmsg, seterrmsg] = useState({ pid: '', pname: '', price: '', qty: '', cid: '', sid: '' });

 const handlechange = (event) => {
  let name = event.target.name;
  let value = event.target.value;
  setformdetails({ ...formdetails, [name]: value });
 }

 const submitform = (event) => {
  event.preventDefault();
   if(formdetails.pid === '' || formdetails.pname === '' || formdetails.price === '' || formdetails.qty === '' || formdetails.cid === '' || formdetails.sid === ''){
    alert("All field is required")
    if(formdetails.pid === ''){
     seterrmsg({...errmsg, pid:"not null"})
    }else{
     seterrmsg({...errmsg, pid:""})
    }
   }else{
    let p = {pid:parseInt(formdetails.pid), pname:formdetails.pname,price:parseFloat(formdetails.price), qty:parseInt(formdetails.qty), cid:parseInt(formdetails.cid),sid:parseInt(formdetails.sid)}
    ProductService.addnewProduct(p)
    .then((response)=>{
     navigate("/home")
    }).catch((err)=>{
     console.log("error : " +JSON.stringify(err));
    })
   }
 }
 return (
  <div>
   <form onSubmit={submitform}>
    <label>pid : </label>
    <input type='number' id='pid' name='pid' value={formdetails.pid} onChange={handlechange}></input>
    <p style={{'color':'red'}}>{errmsg.pid}</p>
    <label>pname : </label>
    <input type='text' id='pname' name='pname' value={formdetails.pname} onChange={handlechange}></input>
    <p>{errmsg.pname}</p>
    <label>price : </label>
    <input type='number' id='price' name='price' value={formdetails.price} onChange={handlechange}></input>
    <p>{errmsg.price}</p>
    <label>qty : </label>
    <input type='number' id='qty' name='qty' value={formdetails.qty} onChange={handlechange}></input>
    <p>{errmsg.qty}</p>
    <label>cid : </label>
    <input type='number' id='cid' name='cid' value={formdetails.cid} onChange={handlechange}></input>
    <p>{errmsg.cid}</p>
    <label>sid : </label>
    <input type='number' id='sid' name='sid' value={formdetails.sid} onChange={handlechange}></input>
    <p>{errmsg.sid}</p>
    <button type='submit' name='add' id='add'>Submit</button>
   </form>
  </div>
 )
}
