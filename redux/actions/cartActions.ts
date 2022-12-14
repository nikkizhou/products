
import { createSlice, createAsyncThunk, AsyncThunkAction } from '@reduxjs/toolkit';
import {Cart,Product} from '../../interfaces'
import { getCartFromLS, setCartToLS } from '../../utils/localStorage'
import { getCartFromDb, updateCartInDb } from '../../utils/apiCalls'

interface ThunkAPI {
  dispatch: Function
  getState: Function
  extra?: any
  requestId: string
  signal: AbortSignal
}

interface Props {
  operation: string,
  pro: Product,
}

export const getCart = createAsyncThunk(
  'cart/getCart',
  async (userId:string, thunkAPI: ThunkAPI) => {
    const cartDb = await getCartFromDb(userId)
    // if logged in, get cart from db, otherwise from localstorage
    return userId ? cartDb : getCartFromLS()
  }
)

export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async ({ operation, pro }: Props, thunkAPI: ThunkAPI) => {
    const userId = await thunkAPI.getState().user?.user?.id
    const cart = await thunkAPI.getState().cart.cart

    // if logged in, update cart from db, otherwise from localstorage
    return userId
      ? await updateCartDb(operation,pro,userId)
      : await updateCartLocalStorage(operation, pro)
  }
)


//------------------------------helper functions--------------------------------

const updateCartLocalStorage = (operation: string, pro: Product) => {
  const cart = getCartFromLS()
  let newCart: Cart = [...cart]
  const product = pro
  
  switch (operation) {
    case 'increaseQty':
      let proNotInCart = true
      newCart = cart?.map((p: Product) => {
        if (p.id !== product.id)  return p
        proNotInCart = false
        return { ...p, quantity: p.quantity + 1 }
      })
      //if the product doesn't exist in cart before, push it to cart and set quantity to 1
      proNotInCart && newCart.push({ ...product, quantity: 1 })
      break;
            
    case 'decreaseQty':
      const pro = cart.find(p => p.id === product.id)
      if (pro.quantity === 1) {  
        return updateCartLocalStorage('removeProduct', pro)
      }
      newCart = cart?.map((p: Product) =>
        p.id === pro.id ? { ...p, quantity: p.quantity - 1 } : p)
      break;
    
    case 'removeProduct':
      newCart = cart.filter((p: Product) => p.id !== product.id); break;
      
    default:
      break;
  }
  setCartToLS(newCart)
  return newCart
}



const updateCartDb = async (operation: string, pro: Product, userId: string) => {
  const productId = pro.id
  if (operation == 'decreaseQty' && pro.quantity === 1)
    operation = 'removeProduct'

  return await updateCartInDb(operation, productId, userId)
}
