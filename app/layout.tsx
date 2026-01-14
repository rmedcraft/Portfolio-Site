import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Navbar01NavLink, Navbar01 } from "@/components/ui/shadcn-io/navbar-01/navbar";
import { FaCodeBranch } from "react-icons/fa";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Rowan Medcraft",
    description: "Rowan Medcraft: Math, Computer Science, and Physics Student at East Stroudsburg University",
};


const navLinks: Navbar01NavLink[] = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: 'https://blog.medcraft.dev', label: 'Blog' },
];

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                >
                    <Navbar01 logo={<FaCodeBranch />} logoHref="/" navigationLinks={navLinks} />

                    <main>{children}</main>
                </ThemeProvider>
            </body>
        </html>
    );
}
