interface ITypography {
    alignment?: "start" | "center" | "end" | "justify";
    children: React.ReactNode;
    fontWeight?: "bold" | "semibold" | "medium" | "regular";
    textDecorationLine?: "line-through";
    tone?: "subdued" | "critical" | "caution" | "success";
}
