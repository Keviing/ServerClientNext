import { SimpleWidget } from "@/components";

export default function MainScreen(){

    return(
        <div className="text-black p-2">
            <h1 className="mt-2 text-3xl ">Dashboard</h1>
            <span className="text-xl">Información General</span>

            <div className="flex flex-wrap p-2">
<SimpleWidget />

            </div>
        </div>
    )
}