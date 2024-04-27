"use client";

// NextJS
import { signOut, useSession } from "next-auth/react";

// ReactJS
import { useTranslation } from "react-i18next";

// Components
import { BtnPrimary } from "@components/Buttons";
import { TitleH1 } from "@components/Typographies";
import Translate from "@components/Translate";

export default function CategoriesPage() {
    // Translations
    const { t } = useTranslation();

    // Session
    const { data: session, status } = useSession();

    if (status === "loading") return;

    return (
        <>
            <TitleH1>
                Hola, {session?.user?.user?.user_information?.full_name}
            </TitleH1>

            <BtnPrimary onClick={signOut} tone="critical">
                {t("Login.SignOut")}
            </BtnPrimary>

            <Translate />
        </>
    );
}

CategoriesPage.auth = true;