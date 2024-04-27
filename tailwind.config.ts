import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/providers/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    plugins: [],
    theme: {
        extend: {
            colors: {
                primary: "#6525fc",
                layout: "#f3f2ff",
                main: {
                    50: "#f3f2ff",
                    100: "#eae7ff",
                    200: "#d8d3ff",
                    300: "#baafff",
                    400: "#9982ff",
                    500: "#794fff",
                    600: "#6525fc",
                    700: "#5b19e8",
                    800: "#4c14c3",
                    900: "#40139f",
                    950: "#25096c",
                },
            },
            fontFamily: {
                sans: ["DM Sans", "sans-serif"],
            },
        },
    },
};
export default config;
