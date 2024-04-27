"use client";

// NextJS
import Image from "next/image";

// ReactJS
import { useTranslation } from "react-i18next";

// Components
import { TitleH1, TitleH2 } from "@components/Typographies";
import Translate from "@components/Translate";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    // Translation
    const { t } = useTranslation();

    return (
        <section className="grid place-items-center h-screen grid-cols-1 bg-white md:grid-cols-2">
            <aside className="flex-col w-full h-full bg-primary shadow-lg gap-8 p-16 md:flex hidden">
                <div className="text-white">
                    <TitleH1>
                        {t("Login.Welcome")}
                    </TitleH1>
                </div>

                <Image
                    src="/logo.svg"
                    alt="Login"
                    width={300}
                    height={150}
                />

                <div className="text-white">
                    <TitleH2 fontWeight="regular">
                        {t("Login.Description")}
                    </TitleH2>
                </div>
            </aside>

            <aside className="flex flex-col w-full h-full bg-layout justify-center gap-8 p-16">
                {children}

                <Translate />
            </aside>
        </section>
    );
}