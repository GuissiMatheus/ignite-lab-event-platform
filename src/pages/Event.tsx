import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { Video } from "../components/Video";
import { Footer } from "../components/Footer";
import { useState } from "react";
import { MonitorPlay } from "phosphor-react";

export function Event() {
    const { slug } = useParams<{ slug: string }>();
    const [isMenuOpen, setStatusMenu] = useState(false);

    return (
        <div className="flex flex-col min-h-screen">
            <Header isMenuOpen={isMenuOpen} setStatusMenu={setStatusMenu} />
            <main className="flex grow">
                {!isMenuOpen && (
                    <div className="flex flex-col justify-between flex-1">
                        { slug ? (
                            <Video lessonSlug={slug} />
                        ) : (
                            <div className="flex-1 flex flex-col justify-center items-center gap-2 bg-reactIcon bg-center bg-no-repeat bg-contain">
                                <MonitorPlay size={100} className="text-green-300" />
                                <p className="text-2xl">Selecione uma <strong className="text-blue-500">aula</strong> para assistir</p>
                            </div>
                        )}
                        <Footer />
                    </div>
                )}
                <Sidebar isMenuOpen={isMenuOpen} setStatusMenu={setStatusMenu}/>
            </main>
        </div>
    )
}