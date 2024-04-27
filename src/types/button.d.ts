interface IButton {
    accessibilityLabel?: string;
    children?: string | string[];
    disabled?: boolean;
    fullWidth?: boolean;
    href?: string;
    icon?: any;
    loading?: boolean;
    onClick?: () => unknown;
    onFocus?: () => void;
    pressed?: boolean;
    size?: "medium" | "large" | "micro" | "slim";
    submit?: boolean;
    textAlign?: "start" | "center" | "end" | "left" | "right";
    tone?: "success" | "critical";
    variant?:
        | "plain"
        | "primary"
        | "secondary"
        | "tertiary"
        | "monochromePlain";
}
