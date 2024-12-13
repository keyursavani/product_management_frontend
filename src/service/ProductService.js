import axios from 'axios';
let baseUrl = "http://localhost:4000/";
class ProductService{

 getAllProducts(){
  let myheaders={'content-Type':'application/json'}
  return axios.get(baseUrl+"products",{headers:myheaders});
 }

 addnewProduct(p){
  let myheaders = {'content-Type':'application/json'};
  return axios.post(baseUrl+"products",p,{headers:myheaders});
 }

 updateProduct(p,pid){
  let myheaders = {'content-Type':'application/json'};
  return axios.put(baseUrl+"products/"+pid,p,{headers:myheaders});
 }

 deleteByID(pid){
  let myheaders={'content-Type':'application/json'}
  return axios.delete(baseUrl+"products/"+pid,{headers:myheaders});
 }

};

export default new ProductService;