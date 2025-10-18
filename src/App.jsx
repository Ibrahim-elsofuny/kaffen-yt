import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import UseRef from "./hooks/UseRef";
import Navbar from "./components/layout/Navbar";
import { CounterProvider } from "./hooks/CounterContext";
import { ChangeNameProvider } from "./hooks/ChangeNameContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ContactUsPage from "./components/contactUsPage/ContactUsPage";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Menu from "./pages/Menu/Menu";
import Services from "./pages/services/Services";

export default function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // مدة الأنيميشن (ms)
            easing: "ease-in-out",
            once: true, // يشتغل مرة واحدة
        });
        AOS.refresh(); // علشان يشتغل مع الراوتنج
    }, []);

    const Routing = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/About",
                    element: <About />,
                },
                {
                    path: "/Menu",
                    element: <Menu />,
                },
                {
                    path: "/Services",
                    element: <Services />,
                },
                {
                    path: "/Contact-us",
                    element: <ContactUsPage />,
                    children: [
                        {
                            index: true,
                            element: <div>Contact Us Form</div>,
                        },
                        {
                            path: "email",
                            element: <div>Contact Us Email</div>,
                        },
                        {
                            path: "location",
                            element: <div>Contact Us Location</div>,
                        },
                        {
                            path: "phone",
                            element: <div>Contact Us Phone</div>,
                        },
                    ],
                },
                {
                    path: "*",
                    element: <div>404</div>,
                },
            ],
        },
    ]);

    return <RouterProvider router={Routing} />;
}
