"use client";

// NextJS
import Link from "next/link";

// Shopify
import { Button } from "@shopify/polaris";

export function BtnPrimary({ children, ...props }: IButton) {
    return <Button variant="primary" size="large" {...props}>
        {children}
    </Button>;
}

export function BtnSecondary({ children, ...props }: IButton) {
    return <Button variant="secondary" size="large" {...props}>
        {children}
    </Button>;
}

export function BtnLink({ children, href, variant = "plain", ...props }: IButton) {
    return (
        <Link href={href ?? "/"}>
            <Button variant={variant} size="large" {...props}>
                {children}
            </Button>
        </Link>
    );
}