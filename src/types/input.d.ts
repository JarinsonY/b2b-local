interface IInput {
    className?: string;
    connectedLeft?: React.ReactNode;
    connectedRight?: React.ReactNode;
    control?: Control;
    disabled?: boolean;
    errors?: FieldError;
    inputMode?:
        | "none"
        | "text"
        | "decimal"
        | "numeric"
        | "tel"
        | "search"
        | "email"
        | "url";
    label?: string;
    loading?: boolean;
    max?: number;
    maxLength?: number;
    min?: number;
    minLength?: number;
    multiline?: number | boolean;
    name: string;
    placeholder?: string;
    onChange?: (value: string, id: string) => void;
    size?: "medium" | "slim";
    type?:
        | "text"
        | "email"
        | "number"
        | "integer"
        | "password"
        | "search"
        | "tel"
        | "url"
        | "date"
        | "datetime-local"
        | "month"
        | "time"
        | "week"
        | "currency";
    value?: string;
    variant?: "inherit" | "borderless";
}

interface IInputSelect {
    className?: string;
    connectedLeft?: React.ReactNode;
    connectedRight?: React.ReactNode;
    control?: Control;
    disabled?: boolean;
    errors?: FieldError;
    inputMode?:
        | "none"
        | "text"
        | "decimal"
        | "numeric"
        | "tel"
        | "search"
        | "email"
        | "url";
    label?: string;
    loading?: boolean;
    max?: number;
    maxLength?: number;
    min?: number;
    minLength?: number;
    multiline?: number | boolean;
    name: string;
    placeholder?: string;
    onChange?: (value: string, id: string) => void;
    options: IOption[];
    size?: "medium" | "slim";
    type?:
        | "text"
        | "email"
        | "number"
        | "integer"
        | "password"
        | "search"
        | "tel"
        | "url"
        | "date"
        | "datetime-local"
        | "month"
        | "time"
        | "week"
        | "currency";
    value?: string;
    variant?: "inherit" | "borderless";
}
