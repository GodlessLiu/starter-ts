// @ts-check
import antfu from "@antfu/eslint-config";

export default antfu({
    stylistic: {
        indent: 4,
        quotes: "double",
        semi: true,
        jsx: true,
    },
    typescript: {
        tsconfigPath: "./tsconfig.json",
    },
});
