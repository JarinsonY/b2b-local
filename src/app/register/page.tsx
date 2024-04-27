"use client";

// NextJS
import { useRouter } from "next/navigation";

// ReactJS
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

// Components
import { BtnPrimary, BtnSecondary } from "@components/Buttons";
import { Input, InputPassword, InputSelect } from "@components/TextFields";
import { TitleH2 } from "@components/Typographies";

// Shopify
import { ButtonGroup, Form, FormLayout } from "@shopify/polaris";

// Utils
import { type TSignUpSchema, signUpSchema } from "@utils/schemas";

// Services
import { getCountries } from "@services/misc";
import { signUp } from "@services/auth";

// External Dependencies
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
 
export default function RegisterPage() {
    // Translations
    const { t } = useTranslation();

    // Navigation
    const { back } = useRouter();

    // Query
    const { data: countries } = useQuery<ICountry[]>({
        queryKey: ["countries"],
        queryFn: () => getCountries()
            .then((res) => res?.data)
            .catch(() => [])
    });

    // Mutation
    const mutation = useMutation({
        mutationFn: (data: DtoSignUp) => signUp(data),
        onSuccess: () => {
            toast.success(t("Toast.SuccessForm"));
            back();
        },
        onError: () => {
            toast.error(t("Toast.ErrorForm"));
        }
    });

    // Form
    const {
        control,
        formState: { errors },
        handleSubmit
    } = useForm<TSignUpSchema>({
        resolver: zodResolver(signUpSchema),
        mode: "all"
    });

    // Functions
    const onSubmit: SubmitHandler<TSignUpSchema> = async (data) => {
        const [country] = data?.country ?? "";

        const countryId = countries?.find((item) => item?.name === country)?.id ?? 1;

        const refactoredData = {
            business_name: data?.business,
            country_id: countryId,
            email: data?.email,
            full_name: data?.fullName,
            mobile_phone_number: data?.phoneNumber,
            password: data?.password
        };

        mutation.mutate(refactoredData as DtoSignUp);
    }; 

    const onError: SubmitErrorHandler<TSignUpSchema> = (errors) => {
        console.error("Errors: ", errors);
        toast.error(t("Toast.ErrorForm"));
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
            <FormLayout>
                <main className="flex flex-col gap-4 items-center w-full">
                    <TitleH2>
                        {t("Register.SignUp")}
                    </TitleH2>

                    <Input
                        className="w-full md:w-2/3"
                        control={control}
                        errors={errors}
                        label={t("Register.Business")}
                        name="business"
                        placeholder={t("Register.BusinessPlaceholder")}
                    />

                    <Input
                        className="w-full md:w-2/3"
                        control={control}
                        errors={errors}
                        label={t("Register.FullName")}
                        name="fullName"
                        placeholder={t("Register.FullNamePlaceholder")}
                    />

                    <section className="flex gap-4 w-full md:w-2/3 flex-wrap lg:flex-nowrap">
                        <InputSelect
                            control={control}
                            errors={errors}
                            label={t("Register.Country")}
                            name="country"
                            options={countries?.map((country) => ({
                                label: country?.name,
                                value: country?.name
                            })) ?? []}
                            placeholder={t("Register.CountryPlaceholder")}
                        />

                        <Input
                            control={control}
                            errors={errors}
                            label={t("Register.PhoneNumber")}
                            name="phoneNumber"
                            placeholder={t("Register.PhoneNumberPlaceholder")}
                            type="tel"
                        />
                    </section>

                    <Input
                        className="w-full md:w-2/3"
                        control={control}
                        errors={errors}
                        label={t("Register.Email")}
                        name="email"
                        placeholder={t("Register.EmailPlaceholder")}
                        type="email"
                    />

                    <InputPassword
                        className="w-full md:w-2/3"
                        control={control}
                        errors={errors}
                        label={t("Register.Password")}
                        name="password"
                        placeholder={t("Register.PasswordPlaceholder")}
                    />

                    <ButtonGroup>
                        <BtnSecondary variant="secondary" onClick={back}>
                            {t("Register.Back")}
                        </BtnSecondary>

                        <BtnPrimary submit>
                            {t("Register.SignUp")}
                        </BtnPrimary>
                    </ButtonGroup>
                </main>
            </FormLayout>
        </Form>
    );
}