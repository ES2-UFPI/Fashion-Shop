import { createSlice } from '@reduxjs/toolkit'

export const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState:[],
    reducers:{
        addItem: (state, action) => {
            state.push(action.payload)
        },
        removeItem: (state, action) => {},
    }
})

export const { addItem,removeItem } = carrinhoSlice.actions

export default carrinhoSlice.reducer