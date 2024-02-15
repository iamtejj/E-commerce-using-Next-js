import FormSubmitButton from "@/components/FormSubmitButton";
import prisma from "@/lib/db/prisma";
import { redirect } from "next/navigation";

export const metadata ={
    title:"Add Product - Flowmazon",
    description:"We Make Your Walltet cry"
}

async function addProduct(formData){
    "use server"
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const imageUrl = formData.get("imageUrl")?.toString();
    const price = Number(formData.get('price') || 0);

    if(!name || !description || !imageUrl || !price ){
        throw Error("Missing Required Field")
    }
    
    await prisma.product.create({
        data:{
            name,description,imageUrl,price
        }
    })
    redirect("/");
}

export default function AddProductpage() {
    return (
        <>
            <div>
                <h1 className="text-lg mb-3 font-bold">Add Product</h1>
                <form action={addProduct}>
                    <input
                        required
                        name="name"
                        placeholder="name"
                        type="text"
                        className="input input-bordered w-full mb-3"
                    />
                    <textarea
                        required
                        name="description"
                        placeholder="Description"
                        className="textarea input-bordered mb-3 w-full"
                    >
                    </textarea>
                    <input
                        required
                        name="imageUrl"
                        placeholder="Image url"
                        type="url"
                        className="input input-bordered w-full mb-3"
                    />
                    <input
                        required
                        name="price"
                        placeholder="Price"
                        type="number"
                        className="input input-bordered w-full mb-3"
                    />
                    <FormSubmitButton className="btn-block" type="submit">
                         ADD PRODUCT
                    </FormSubmitButton>

                </form>

            </div>
        </>
    )
}