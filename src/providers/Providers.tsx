// Providers
import { LanguageProvider } from "@contexts/LanguageContext";

// Providers
import { ReactQueryClientProvider } from "./ReactQueryProvider";
import AuthProvider from "./AuthProvider";
import ShopifyProvider from "./ShopifyProvider";

// External Dependencies
import { Toaster } from "sonner";

export default function Provider({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <LanguageProvider>
                <ShopifyProvider>
                    <ReactQueryClientProvider>
                        <Toaster richColors closeButton position="top-center" />
                        {children}
                    </ReactQueryClientProvider>
                </ShopifyProvider>
            </LanguageProvider>
        </AuthProvider>
    );
}
