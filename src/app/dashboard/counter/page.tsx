import { CartCounter } from "@/shopping-cart"

export const metadata = {
    title: 'Counter Page',
    description: 'Este es un simple contador'
}

export default function CounterPage() {

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <span className="">Productos en el carrito</span>
            <CartCounter value={10} /> 
        </div>
    )
}