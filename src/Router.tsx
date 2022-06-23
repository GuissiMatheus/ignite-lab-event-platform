import { Event } from "./pages/Event";
import { Route, Routes } from "react-router-dom";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/event" element={<Event />} />
            <Route path="/event/lesson/:slug" element={<Event />} />
        </Routes>
    )
}