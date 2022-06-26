import { LogoIgniteLab } from "./LogoIgniteLab";

export function Header() {
    return (
        <header className="w-full py-5 flex items-center sm:justify-center bg-gray-700 border-b border-gray-600 sticky top-0 z-[100]">
            <LogoIgniteLab />
        </header>
    )
}