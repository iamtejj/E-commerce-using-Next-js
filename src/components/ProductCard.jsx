import Link from "next/link";
import PriceTag from "./PriceTag";
import Image from "next/image";

export default function ProductCard({product}){
    const isNew = Date.now() - new Date(product.createdAt).getTime() < 1000*60*60*24*7
    
    return(
        <>
        
            <Link className="card w-full bg-base-100 hover:shadow-xl rounded-xl overflow-hidden transition-shadow" href={"/products/" + product.id}>
                <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={800}
                    height={400}
                    className="h-48 object-cover"
                />
                <div className="card-body">
                    <h2 className="card-title">
                        {product.name}
                        {isNew && <div className="badge badge-secondary ">New</div>}
                        </h2>
                    <p>{product.description}</p>

                    <PriceTag price={product.price}  />
                </div>
            </Link>
        </>
    )
}