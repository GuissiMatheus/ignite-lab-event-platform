import { List, X } from "phosphor-react";
import { LogoIgniteLab } from "./LogoIgniteLab";
import { StatusMenu } from "../interfaces/StatusMenu";

export function Header(props: StatusMenu) {
    return (
        <header className="w-full p-5 flex items-center justify-between sm:justify-center bg-gray-700 border-b border-gray-600 sticky top-0 z-[100]">
            <LogoIgniteLab />
            <div
                className="flex items-center gap-2 sm:hidden"
                onClick={() => props.setStatusMenu(!props.isMenuOpen)}    
            >
                Aulas
                <div className="text-sm text-blue-500">
                    {props.isMenuOpen ? <X size={32} /> : <List size={32} />}    
                </div>
            </div>
        </header>
    )
}