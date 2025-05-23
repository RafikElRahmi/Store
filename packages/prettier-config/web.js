import { config as baseConfig } from "./base";

export const config = {
    ...baseConfig,
    plugins: [
        "prettier-plugin-tailwindcss",
        "prettier-plugin-organize-imports",
    ],
};
