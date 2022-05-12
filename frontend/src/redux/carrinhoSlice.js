import { createSlice } from '@reduxjs/toolkit'

export const carrinhoSlice = createSlice({
    name: 'carrinho',
    initialState:[],
    reducers:{
        addItem: (state, action) => {
            state.push(action.payload)
        },
        removeItem: (state, action) => {
            for (let i = 0; i < state.length; i++){
                if(state[i].id === action.payload){
                    state.splice(i,1);
                    break;
                }
            }
        },
    }
})

export const { addItem,removeItem } = carrinhoSlice.actions

export default carrinhoSlice.reducer