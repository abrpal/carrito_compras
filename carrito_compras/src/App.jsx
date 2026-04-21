import {useState, useEffect} from 'react'
import Header from "./components/Header.jsx";
import Guitar from './components/Guitar.jsx'
import { db } from './data/db.js'


function App() {

  const intialCart = () =>{
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }

  const [data, setData] = useState(db);
  const [cart, setCart] = useState(intialCart);

  const MAX_ITEMS = 5;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item){
    const itemIndex = cart.findIndex(guitar => guitar.id === item.id);
    
    if(itemIndex === -1){
      item.quantity = 1;
      setCart([...cart, item]);
    }else{
      if(cart[itemIndex].quantity >= MAX_ITEMS) return;
      let updatedCart = [...cart];
      updatedCart[itemIndex].quantity++;
      setCart(updatedCart);
    }
  }

  function removeFromCart(id){
    setCart(prevCart => prevCart.filter((item) => item.id !==id));
  }

  function increaseQuantity(id){
    let updatedCart = cart.map(item => {
      if(item.id === id && item.quantity < MAX_ITEMS) item.quantity++;
      return item;
    })
    setCart(updatedCart);
  }

  function decreaseQuantity(id){
    let updatedCart = cart.map(item => {
      if(item.id === id && item.quantity > 1) item.quantity--;
      return item;
    })
    setCart(updatedCart);
  }

  function clearCart(){
    setCart([])
  }

  return (
    <>
    <Header 
      cart = {cart}
      removeFromCart={removeFromCart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      clearCart={clearCart}
    />

    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            
            {data.map((guitar) => (
              <Guitar 
              key = {guitar.id}
              guitar = {guitar}
              addToCart = {addToCart}
              />
            ))}
            
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App
