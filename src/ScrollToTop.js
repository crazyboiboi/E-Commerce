import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Calls a timeout so it will instant scroll to top when navigated to a new page
        // Then set back the scroll behaviour to smooth once it is done
        document.documentElement.style.scrollBehavior = 'auto';
        setTimeout(() => window.scrollTo(0, 0), 5);
        setTimeout(() => document.documentElement.style.scrollBehavior = 'smooth', 5);
    }, [pathname]);

    return null;
}