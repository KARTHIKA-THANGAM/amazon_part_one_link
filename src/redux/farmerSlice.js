import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    userInfo:[],
}

export const farmerSlice = createSlice({
    name:"Farmer",
    initialState,
    reducers:{
        addToCart:(state,action) => {
            const item = state.products.find((item)=>item.id===action.payLoad.id)
            state.products.push(action.payLoad)
            if(item){
                item.quantity+= action.payLoad.quantity;
            }
            else{
                state.products.push(action.payLoad);
            }
        }
    }
})
export const{addToCart}= farmerSlice.actions;
export default farmerSlice.reducer;