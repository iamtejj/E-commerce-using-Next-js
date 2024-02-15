"use server"

import { createCart, getcart } from "@/lib/db/cart"
import prisma from "@/lib/db/prisma";
import { revalidatePath } from "next/cache";

export async function incrementProductQuantity(productId) {
    const cart = await getcart() ?? await createCart();
    const articleIncart = cart.items.find(item => item.productId === productId)
    if (articleIncart) {
        await prisma.cartItem.update({
            where: { id: articleIncart.id },
            data: {
                quantity: { increment: 1 }
            }
        })
    }
    else{
        await prisma.cartItem.create({
            data:{
                cartId:cart.id,
                productId,
                quantity:1
            }
        })
    }
    revalidatePath('/products/[id]')
}