import Link from "next/link";
import logo from "@/assets/logo.png"
import Image from "next/image";
import { redirect } from "next/navigation";
import { getcart } from "@/lib/db/cart";
import ShoppingCartButton from "./ShoppingCartButton";


async function searchProducts(formData){
    "use server"
    const seachQuery = formData.get("searchQuery")?.toString();

    if(seachQuery){
        redirect('/search?query='+seachQuery);
    }
}

export default async function Navbar(){
    const cart = await getcart()
    return(
        <>
            <div className="bg-base-100">
                <div className="navbar max-w-7xl m-auto flex-col sm:flex-row gap-2">
                    <div className="flex-1">
                        <Link href="/"  className="btn btn-ghost text-xl">
                            <Image src={logo} 
                            width={40}
                            height={40}
                            alt="Flowmazon logo"
                            />
                            Flowmazon
                        </Link>
                    </div>
                    <div className="flex-none gap-2">
                        <form action={searchProducts}>
                            <div className="form-control">
                                <input 
                                    name="searchQuery"
                                    placeholder="search"
                                    className="input input-bordered w-full min-w-[100px]"
                                />
                            </div>
                        </form>
                        <ShoppingCartButton cart={cart} />
                    </div>
                </div>
            </div>
        </>
    )
}