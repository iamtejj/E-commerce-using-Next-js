import { formatPrice } from "@/lib/formate"

export default function PriceTag({ price, className }) {

    return (
        <span className={`badge ${className}`}>{formatPrice(price)}</span>
    )
}