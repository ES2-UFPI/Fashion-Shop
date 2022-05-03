import { createSlice } from '@reduxjs/toolkit'

export const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState:[],
    reducers:{
        addItem: (state, action) => {
            state.push(action.payload)
        },
        removeItem: (state, action) => {
            let novo_array = state.filter((item) => {
                if(item.id !== action.payload.id){
                    return item
                }
            })
            state = novo_array
        },
    }
})

export const { addItem,removeItem } = carrinhoSlice.actions

export default carrinhoSlice.reducer