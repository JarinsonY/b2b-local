// Layouts
import RegisterLayout from "@layouts/RegisterLayout";

export default function RegisterTemplate({ children }: { children: React.ReactNode }) {
    return <RegisterLayout>
        {children}
    </RegisterLayout>;
}