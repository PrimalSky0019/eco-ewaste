import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "EcoSnap v2.0 | Smart E-Waste Recycling",
    description: "AI-powered e-waste detection and recycling rewards.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {/* You can add a <Navbar /> here later if you create one */}
        {children}
        <Toaster />
        </body>
        </html>
    );
}