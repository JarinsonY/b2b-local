"use client";

// Shopify
import { AppProvider } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";

export default function ShopifyProvider({ children }: { children: React.ReactNode }) {
    return (
        <AppProvider i18n={enTranslations}>
            {children}
        </AppProvider>
    );
}