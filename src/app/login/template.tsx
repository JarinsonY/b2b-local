// Layouts
import LoginLayout from "@layouts/LoginLayout";

export default function LoginTemplate({ children }: { children: React.ReactNode }) {
    return <LoginLayout>
        {children}
    </LoginLayout>;
}