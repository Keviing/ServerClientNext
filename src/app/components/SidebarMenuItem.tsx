'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { JSX } from "react";

interface Props {
    path: string; // a donde quiero navegar
    icon: JSX.Element; // mi icono que es un elemento de react
    title: string; // titulo que se va a mostrar en el menu 
    subTitle: string; // subtitulo que se va a mostrar en el menu
}

export const SidebarMenuItem = ({ path, icon, title, subTitle }: Props) => {
    
    const pathName = usePathname();
    
    return (
        <Link href={path} 
        className={`w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 
        ${pathName === path ? 'bg-blue-800' : ' '} hover:bg-white/5 transition ease-linear duration-150`}>
            <div>
                <div

                >{icon}</div>

            </div>
            <div className="flex flex-col">
                <span className="text-lg font-bold leading-5 text-white">{title}</span>
                <span className="text-sm text-white/50 hidden md:block">{subTitle}</span>
            </div>
        </Link>
    )
}