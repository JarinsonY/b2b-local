"use client";

// NextJS
import { signIn } from "next-auth/react";

// ReactJS
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

// Components
import { BtnLink, BtnPrimary } from "@components/Buttons";
import { Input, InputPassword } from "@components/TextFields";
import { TitleH2 } from "@components/Typographies";

// Shopify
import { ButtonGroup, Form, FormLayout } from "@shopify/polaris";

// Utils
import { type TSignInSchema, signInSchema } from "@utils/schemas";

// External Dependencies
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
 
export default function LoginPage() {
    // Translations
    const { t } = useTranslation();

    // Form
    const {
        control,
        formState: { errors },
        handleSubmit
    } = useForm<TSignInSchema>({
        resolver: zodResolver(signInSchema),
        mode: "all"
    });

    // Functions
    const onSubmit: SubmitHandler<TSignInSchema> = async (data) => {
        await signIn("credentials", {
            callbackUrl: "/categories",
            email: data.email,
            password: data.password,
            redirect: true
        });
    }; 

    const onError: SubmitErrorHandler<TSignInSchema> = (errors) => {
        console.error("Errors: ", errors);
        toast.error(t("Toast.ErrorForm"));
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <FormLayout>
                <section className="flex flex-col gap-4 items-center w-full">
                    <TitleH2>
                        {t("Login.SignIn")}
                    </TitleH2>

                    <Input
                        className="w-full sm:w-1/2"
                        control={control}
                        errors={errors}
                        label={t("Login.Email")}
                        name="email"
                        placeholder={t("Login.EmailPlaceholder")}
                        type="email"
                    />

                    <InputPassword
                        className="w-full sm:w-1/2"
                        control={control}
                        errors={errors}
                        label={t("Login.Password")}
                        name="password"
                        placeholder={t("Login.PasswordPlaceholder")}
                    />

                    <BtnLink href="/forgot-password">
                        {t("Login.ForgotPassword")}
                    </BtnLink>

                    <ButtonGroup>
                        <BtnPrimary submit>
                            {t("Login.Enter")}
                        </BtnPrimary>

                        <BtnLink href="/register" variant="secondary">
                            {t("Login.SignUp")}
                        </BtnLink>
                    </ButtonGroup>
                </section>
            </FormLayout>
        </Form>
    );
}