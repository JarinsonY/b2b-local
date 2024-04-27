// Layouts
import AppLayout from "@layouts/AppLayout";

export default function AppTemplate({ children }: { children: React.ReactNode }) {
    return <AppLayout>
        {children}
    </AppLayout>;
}