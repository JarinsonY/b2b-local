// NextJS
import type { Metadata } from "next";

// Metadata
export const metadata: Metadata = {
    title: "Zeler | Login",
    description: "B2B SaaS platform for managing your businessGenerated by create next app",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <main>
            {children}
        </main>
    );
}