import React from 'react';

export default function AboutUsFooter() {
    return (
        <footer className="bg-black text-white p-4 text-center">
            <h2 className="text-2xl font-bold mb-4">About Us</h2>
            <p className="text-lg text-white mb-4">
                This is the about us page.
            </p>
            <div className="flex justify-center mb-4">
                <a
                    href="#"
                    className="text-red-500 hover:text-red-700 transition-colors duration-200 mr-4"
                >
                    Learn More
                </a>
                <a
                    href="#"
                    className="text-red-500 hover:text-red-700 transition-colors duration-200"
                >
                    Contact Us
                </a>
            </div>
            <p className="text-sm text-gray-400">&copy; 2023 Kiosk Website</p>
        </footer>
    );
}
