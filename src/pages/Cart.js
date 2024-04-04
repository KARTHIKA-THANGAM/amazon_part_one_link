import React from 'react';
import {useSelector} from 'react-redux';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const Cart=()=>{
    const products = useSelector((state)=> state.farmerReducer.products);
    return(
    <div className="w-full bg-gray-100 p-4">
        <div className="container mx-auto h-auto grid grid-cols-5 gap-8">
            <div className="w-full h-full bg-white px-4 col-span-4">
                <div className="font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3">
                    <h2 className="text-3xl font-medium">Shopping Cart</h2>
                    <h4 className="text-xl font-normal" >Subtitle</h4>
                </div>
                {/*Products start here */}
                <div>
                    {
                        products.map((item)=>(
                            <div key={item.id} className="w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6">
                               <div className="w-full flex items-center gap-6">
                                <div className="w-1/5">
                                <img className="w-full h-44 object-contain"src={item.image} alt="ProductImg"/>
                                </div>
                                <div className="w-3/5">
                                    <h2 className="font-semibold text-lg">{item.ttle}</h2>
                                    <p className="text-sm">{item.description.substring(0,100)}</p>
                                    <p className='text-base' >Unit Price {" "}<span className="font-semibold">${item.price}</span></p>
                                    <div className="bg-[#0F2F2] flex justify-center items-center gap-1 w-24 py-1 text-center
                                     drop-shadow-lg rounded-md">
                                        <p>Qty:</p>
                                        <p  className="cursor-pointer bg-gray-200 px-1 rounded-md
                                         hover:bg-gray-400 duration-300">-</p>
                                        <p>{item.quantity}</p>
                                        <p className="cursor-pointer bg-gray-200 px-1 rounded-md
                                         hover:bg-gray-400 duration-300"  >+</p>
                                    </div>
                                    <button className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2
                                    hover:bg-red-700 active:bg-red-900 duration-300">
                                        Delete Item</button>   
                                </div>
                                <div>
                                    <p className="text-lg font-titleFont font-semibold">
                                        {item.price * item.quantity}
                                    </p>
                                </div>
                            </div>
                        </div>
                        ))
                    }
                </div>
            </div>

            <div className="w-full h-52 bg-white col-span-1 flex  flex-col 
            justify-center items-center p-4">
                <div>
                <p className="flex gap-2 items-start text-sm"><span><CheckCircleicon/></span>{" "}
                Your order qualities for FREE Shipping choose this 
                option at checkout.see Details...</p>
            </div>
            <div>
                <p className="font-semibold px-10 py-1 flex items-center justify-between">
                    Total: <span className="text-lg font-bold">$50</span></p>
            </div>
            <button className="w-full font-titleFont font-medium text-base bg-gradient-to-tr 
            from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow
            active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">Proceed to pay</button>
            </div>
        </div>
    </div>
    );
}
export default Cart

