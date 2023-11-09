import { Main } from 'next/document';
import { Inter } from "next/font/google";
import { useEffect, useState } from 'react';
const inter = Inter({ subsets: ["latin"] });
import BigList from './BigList';

const calculateMostExpensiveItem = ((data)=>{
  return(
    data.reduce((total, product)=>{
      const price= product.fields.price;
      if(price>=total){
        total=price;
      }
      return total;
    },0) / 100
  )
});


const url = "https://course-api.com/javascript-store-products";

export default function Home() {

  const [counter, setCounter] = useState(0);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState(0);

  const addToCart = () =>{
    setCart(cart+1);
  }

  const getProducts = async ()=>{
    const response = await fetch(url);
    const products = await response.json()
    setProducts(products);
    console.log(products);
  }

  useEffect(()=>{
    getProducts();
  },[]);


  const mostExpensiveItem = calculateMostExpensiveItem(products)


  return ( 

    <main>
      <h1>Counter : {counter}</h1>
      <h1>Carts : {cart}</h1>
      
      <button onClick={()=> setCounter(counter+1)}>Increase</button>
      <h1>Most Expensive Item : {mostExpensiveItem}</h1>
      <div>

        <BigList productList={products} addToCart={addToCart}/>

      </div>



    </main>
    

    


  )
}
