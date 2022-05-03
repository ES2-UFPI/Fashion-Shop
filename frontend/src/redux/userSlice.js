import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState:{isLoged:false, isAdmin:false},
    reducers:{
        setIsLogedTrue: (state) => {state.isLoged = true},
        setIsLogedFalse: (state) => {state.isLoged = false},
    }
})

export const {setIsLogedFalse, setIsLogedTrue} = userSlice.actions

export default userSlice.reducer