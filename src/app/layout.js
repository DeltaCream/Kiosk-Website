import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// import { ThemeProvider } from "@/components/ThemeProvider";
// import { ThemeContext } from "@/components/ThemeProvider"; // Adjust the import path as necessary

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Kiosk Website",
    description: "A Japanese food kiosk website built with Next.js",
};

export default function RootLayout({ children }) {
    return (
        // <ThemeProvider>
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                {children}
            </body>
        </html>
        // </ThemeProvider>
        // <ThemeProvider>
        //     <ThemeContext.Consumer>
        //         {(context) => {
        //             console.log(context);
        //             return <div>App</div>;
        //         }}
        //     </ThemeContext.Consumer>
        // </ThemeProvider>
    );
}
