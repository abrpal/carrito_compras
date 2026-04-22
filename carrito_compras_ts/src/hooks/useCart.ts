import {useState, useEffect, useMemo} from 'react'
import { db } from '../data/db.js'
import type { Guitar, CartItem } from '../types/index.js'


export const useCart = () =>{
const intialCart = () : CartItem[]  =>{
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }

  const [data] = useState(db);
  const [cart, setCart] = useState(intialCart);

  const MAX_ITEMS = 5;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item : Guitar){
    const itemIndex = cart.findIndex(guitar => guitar.id === item.id);
    
    if(itemIndex === -1){
      const newItem : CartItem = {...item, quantity: 1};
      setCart([...cart, newItem]);
    }else{
      if(cart[itemIndex].quantity >= MAX_ITEMS) return;
      let updatedCart = [...cart];
      updatedCart[itemIndex].quantity++;
      setCart(updatedCart);
    }
  }

  function removeFromCart(id : Guitar['id']){
    setCart(prevCart => prevCart.filter((item) => item.id !==id));
  }

  function increaseQuantity(id : Guitar['id']){
    let updatedCart = cart.map(item => {
      if(item.id === id && item.quantity < MAX_ITEMS) item.quantity++;
      return item;
    })
    setCart(updatedCart);
  }

  function decreaseQuantity(id : Guitar['id']){
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

