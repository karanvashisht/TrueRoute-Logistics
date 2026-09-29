import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: { colors: { ink: "#0B132B", slate: "#1C2541", brand: "#F77F00" } } },
  plugins: []
};
export default config;
