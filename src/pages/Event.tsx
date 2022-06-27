import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { Video } from "../components/Video";
import { Footer } from "../components/Footer";
import { useState } from "react";


export function Event() {
    const { slug } = useParams<{ slug: string }>();
    const [isMenuOpen, setStatusMenu] = useState(false);
    
    function handleMenu(status: boolean) {
        setStatusMenu(status);
    }

    return (
        <div className="flex flex-col min-h-screen">
            <Header updateStatusMenu={handleMenu} />
            <main className="flex">
                {!isMenuOpen && (
                    <div className="flex flex-col justify-between flex-1">
                        { slug
                            ? <Video lessonSlug={slug} /> 
                            : <div className="flex-1" />
                        }
                        <Footer />
                    </div>
                )}
                <Sidebar isMenuOpen={isMenuOpen} />
            </main>
        </div>
    )
}