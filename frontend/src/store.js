import { configureStore } from '@reduxjs/toolkit'
import userReducer from './redux/userSlice'
import carrinhoSlice from './redux/carrinhoSlice';

export default configureStore({
  reducer: {
    login: userReducer,
    carrinho:carrinhoSlice
  }
})