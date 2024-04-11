import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
    userInfo:[],
}

export const farmerSlice = createSlice({
    name:"farmer",
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
        },
        incrementQuantity:(state,action)=>{
            const item =state.products.find((item)=>item.id===action.payLoad)
            item.quantity++
        },
        decrementQuantity:(state,action)=>{
            const item =state.products.find((item)=>item.id===action.payLoad);
            if(item.quantity==1){
                item.quantity=1
            }
            else{
                item.quantity--
            }
        },
        deleteItem:(state,action)=>{
            state.products=state.products.filter((item)=>item.id!==action.payLoad)
        },
        resetCart:(state)=>{
            state.products=[]
        }
    }
})
export const{addToCart,deleteItem,resetCart,incrementQuantity,decrementQuantity}= farmerSlice.actions;
export default farmerSlice.reducer;
