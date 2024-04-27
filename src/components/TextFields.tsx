"use client";

// ReactJS
import { Controller } from "react-hook-form";
import { useState } from "react";
import { useTranslation } from "react-i18next";

// Shopify
import { Autocomplete, Button, TextField } from "@shopify/polaris";
import { ViewIcon, HideIcon } from "@shopify/polaris-icons";

// Utils
import { joinClassNames } from "@utils/functions";

export function Input({ control, errors, name, type = "text", ...props }: IInput) {
    // Translate
    const { t } = useTranslation();

    // Message Error
    const error = t(errors?.[name]?.message) ?? errors?.[name]?.message;

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <div className={joinClassNames("w-full", props.className ?? "")}>
                    <TextField
                        {...field}
                        {...props}
                        autoComplete="off"
                        autoSize
                        error={error}
                        label={props.label}
                        name={name}
                        type={type}
                    />
                </div>
            )}
        />
    );
}

export function InputPassword({ control, errors, name, ...props }: IInput) {
    // Translate
    const { t } = useTranslation();

    // Message Error
    const error = t(errors?.[name]?.message) ?? errors?.[name]?.message;

    // States
    const [visible, setVisible] = useState(false);

    // Functions
    const toggleVisibility = () => setVisible((visible: boolean) => !visible);

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => (
                <div className={joinClassNames("w-full", props.className ?? "")}>
                    <TextField
                        {...field}
                        {...props}
                        autoComplete="off"
                        connectedRight={<Button
                            accessibilityLabel="Toggle password visibility"
                            icon={visible ? ViewIcon : HideIcon}
                            onClick={toggleVisibility}
                        />}
                        error={error}
                        label={props.label}
                        name={name}
                        type={visible ? "text" : "password"}
                    />
                </div>
            )}
        />
    );
}

export function InputSelect({ control, errors, name, type = "text", ...props }: IInputSelect) {
    // Translate
    const { t } = useTranslation();

    // Message Error
    const error = t(errors?.[name]?.message) ?? errors?.[name]?.message;

    return (
        <Controller
            control={control}
            name={name}
            render={({ field }) => {
                // TextField
                const textField = (
                    <Autocomplete.TextField
                        {...field}
                        {...props}
                        autoComplete="off"
                        error={error}
                        label={props.label}
                        name={name}
                        type={type}
                    />
                );
    
                return (
                    <div className={joinClassNames("w-full", props.className ?? "")}>
                        <Autocomplete
                            {...field}
                            {...props}
                            onSelect={(value) => field.onChange(value)}
                            options={props.options ?? []}
                            selected={field.value ?? ""}
                            textField={textField}
                        />
                    </div>
                );
            }}
        />
    );
}