import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extending the base Next.js configurations
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Disabling some specific ESLint rules
  {
    rules: {
      "no-console": "off",             // Disables no-console rule
      "react/no-unused-vars": "off",   // Disables react/no-unused-vars rule
      "react/react-in-jsx-scope": "off", // Disables react/react-in-jsx-scope rule (Next.js doesn't require this)
    },
  },
];

export default eslintConfig;
