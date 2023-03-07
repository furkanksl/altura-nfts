/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            keyframes: {
                yAxis: {
                    "0%": { transform: "translateY(0%)" },
                    "50%": { transform: "translateY(30px)" },
                    "100%": { transform: "translateY(0%)" },
                },
            },
            animation: {
                "bounce-slow": "yAxis 3s linear infinite",
            },
        },
    },
    plugins: [],
};
