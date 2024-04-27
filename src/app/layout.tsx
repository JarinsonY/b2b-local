// NextJS
import { DM_Sans } from "next/font/google";
import type { Metadata } from "next";

// Providers
import Providers from "@providers/Providers";

// Styles
import "./globals.css";
import "@shopify/polaris/build/esm/styles.css";

// Fonts
const dmSans = DM_Sans({
    style: "normal",
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

// Metadata
export const metadata: Metadata = {
    title: "Zeler",
    description: "B2B SaaS platform for managing your businessGenerated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={dmSans.className}>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}