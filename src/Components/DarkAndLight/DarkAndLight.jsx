import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        // Check the user's preference for dark mode
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)")
            .matches;

        // Initialize the dark mode state based on user preference
        setDarkMode(prefersDarkMode);
    }, []);

    useEffect(() => {
        // Apply the "dark" class to the document's body when dark mode is active
        if (darkMode) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.removeAttribute("data-theme");
        }
    }, [darkMode]);

    return (
        <label className="flex items-center">
            <div className="form-control">
                <label className="cursor-pointer label">
                    <input type="checkbox" className="toggle" checked={darkMode} onChange={() => setDarkMode(!darkMode)}/>
                </label>
            </div>
        </label>
    );
};

export default DarkModeToggle;
