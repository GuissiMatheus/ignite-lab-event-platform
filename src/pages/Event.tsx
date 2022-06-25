import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useParams } from "react-router-dom";
import { Video } from "../components/Video";
import { Footer } from "../components/Footer";

export function Event() {
    const { slug } = useParams<{ slug: string }>()

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex">
                <div className="flex flex-col flex-1">
                    { slug
                        ? <Video lessonSlug={slug} /> 
                        : <div className="flex-1" />
                    }
                    <Footer />
                </div>
                <Sidebar />
            </main>
        </div>
    )
}