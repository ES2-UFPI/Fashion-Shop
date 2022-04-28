import { createSlice } from '@reduxjs/toolkit'

export const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState:{data:[]},
    reducers:{
        addItem: (state, action) => {},
        removeItem: (state, action) => {},
    }
})

export const { addItem,removeItem } = userSlice.actions

export default carrinhoSlice.reducer