import {useState, useEffect, use} from 'react'
import { db } from '../data/db.js'



export const useCart = () =>{
const intialCart = () =>{
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }

  const [data] = useState(db);
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

    //state derivado
    const isEmpty = useMemo(() => cart.length === 0,[cart]);
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.price * item.quantity), 0), [cart]);

    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
}

