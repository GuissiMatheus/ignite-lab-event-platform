import { List, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { LogoIgniteLab } from "./LogoIgniteLab";

export function Header(props: { updateStatusMenu(isMenuOpen: boolean): void }) {
    const [isMenuOpen, setStatusMenu] = useState(false);

    useEffect(() => {
        props.updateStatusMenu(isMenuOpen);
    }, [isMenuOpen]);

    return (
        <header className="w-full p-5 flex items-center justify-between sm:justify-center bg-gray-700 border-b border-gray-600 sticky top-0 z-[100]">
            <LogoIgniteLab />
            <div
                className="flex items-center gap-2 sm:hidden"
                onClick={() => setStatusMenu(!isMenuOpen)}    
            >
                Aulas
                <div className="text-sm text-blue-500">
                    {isMenuOpen ? <X size={32} /> : <List size={32} />}    
                </div>
            </div>
        </header>
    )
}