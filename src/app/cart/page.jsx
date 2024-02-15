import { getcart } from "@/lib/db/cart"
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import { formatPrice } from "@/lib/formate";

export const metadata ={
    title:"Your cart Flowmazon"
}

export default async function CartPage(){
    const cart = await getcart();

    return(
        <>
            <div>
                <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
                {cart?.items.map(cartItem =>(
                   <CartEntry cartItem={cartItem} key={cartItem.id} setProductQuantity={setProductQuantity} /> 
                   
                ))}
                {!cart?.items.length && <p>Your Cart is empty.</p>}
                <div className="flex flex-col items-end sm:items-center">
                    <p className="mb-3 font-bold ">
                        Total: {formatPrice(cart?.subtotal || 0)}
                    </p>
                    <button className="btn btn-primary"> Checkout </button>
                </div>
            </div>
        </>
    )
}