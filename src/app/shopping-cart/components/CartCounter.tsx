'use client'
import { useState } from "react";

interface Props{
    value:number
}
export const CartCounter = ({value}:Props) => {
    const [cantidad, setCantidad] = useState(value);

    return (
        <>
            <span className="text-9xl ">{cantidad}</span>

            <div className="flex">

                <button
                    onClick={() => setCantidad(cantidad + 1)}
                    className="p-2 flex mr-2 items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    + 1
                </button>
                <button
                    disabled={cantidad === 0}
                    onClick={() => setCantidad(cantidad - 1)}
                    className="p-2 flex  mr-2 items-center bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                    - 1
                </button>
            </div>
        </>
    )

}