"use client";

// Components
import { TextParagraph } from "@components/Typographies";

// Shopify
import { Card, EmptyState } from "@shopify/polaris";

export default function NotFound() {
    return (
        <Card>
            <EmptyState
                action={{ content: "Add transfer" }}
                heading="Manage your inventory transfers"
                image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
                secondaryAction={{
                    content: "Learn more",
                    url: "https://help.shopify.com",
                }}
            >
                <TextParagraph>Track and receive your incoming inventory from suppliers.</TextParagraph>
            </EmptyState>
        </Card>
    );
}