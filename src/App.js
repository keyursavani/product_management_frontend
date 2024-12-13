import MyNavbar from "./component/MyNavbar";
import MyHeader from './component/MyHeader';
import{Routes,Route,Navigate} from 'react-router-dom';
import HomePageComponent from "./pages/HomePageComponent";
import AddProductForm from "./pages/AddProductForm";
import EditProduct from "./pages/EditProduct";



function App() {
  return (
    <div>
    <MyHeader></MyHeader>
     <MyNavbar></MyNavbar>
     <Routes>
      <Route path="/" element={<Navigate replace to="/home"></Navigate>} ></Route>
      <Route path="/home" element={<HomePageComponent></HomePageComponent>}></Route>
      <Route path="/form" element={<AddProductForm></AddProductForm>}></Route>
      <Route path="/edit/:pid" element={<EditProduct></EditProduct>} ></Route>
     </Routes>
    </div>
  );
}

export default App;
