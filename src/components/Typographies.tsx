"use client";

// Shopify
import { Text } from "@shopify/polaris";

export function TitleH1({ children, ...props }: ITypography) {
    return <Text variant="heading2xl" as="h1" {...props}>
        {children}
    </Text>;
}

export function TitleH2({ children, ...props }: ITypography) {
    return <Text variant="headingXl" as="h2" {...props}>
        {children}
    </Text>;
}

export function TitleH3({ children, ...props }: ITypography) {
    return <Text variant="headingLg" as="h3" {...props}>
        {children}
    </Text>;
}

export function TextParagraph({ children, ...props }: ITypography) {
    return <Text variant="bodyLg" as="p" {...props}>
        {children}
    </Text>;
}

export function TextSpan({ children, ...props }: ITypography) {
    return <Text variant="bodyLg" as="span" {...props}>
        {children}
    </Text>;
}

