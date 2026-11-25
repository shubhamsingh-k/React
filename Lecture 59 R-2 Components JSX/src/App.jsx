// console.log(2);


import Body from './Components/Body'
import Navbar from './Components/Navbar';    //default
import Footer, {Footer as FooterUpdate} from './Components/Footer'    //named 
import { Product } from './Components/Product';
import Products from './Components/Products';

// console.log(2);
// function Navbar(){
//   return (
//     <ul>
//       <li>Home</li>
//        <li>Shop</li>
//         <li>About</li>
//          <li>Login</li>
//     </ul>
//   );
// }

const user = {
  name : "shubham",
  isLoggedIn : true,
};

const products = [
  {  title : "One8 ka juta",
    price : "₹5555"

},
{
  title : "Puma ka shoes",
  price : "₹8776" 
},
{
  title : "Bata ka shoes",
  price : "₹7989"
}
];


function App() {
  // console.log(3)
     return (
      <div>
          <Navbar user = {user}/>
          <Products products={products}>
          <p>Products</p>
          <a href="">go to this link</a>
        </Products>
        <Body/>
        <FooterUpdate/>
        {/* <Footer/> */}
            {/* <h1>Hii</h1> */}
        
      </div>
     
     );
    }
     export default App;