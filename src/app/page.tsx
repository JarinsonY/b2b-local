"use client";

// NextJS
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function RootPage() {
    // Navigation
    const router = useRouter();

    // Session
    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/login");
        },
    });

    if (status === "loading") return <div>Loading...</div>;

    redirect("/categories");
}