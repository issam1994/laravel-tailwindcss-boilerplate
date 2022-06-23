module.exports = {
    purge: [
        "./resources/views/**/*.blade.php",

        "./resources/js/**/*.js",

        "./resources/**/*.vue",

        "./resources/**/*.jsx",

        "./resources/**/*.tsx",
    ],
    theme: {
        extend: {
            screens: {
                "max-2xl": { max: "1535px" },
                // => @media (max-width: 1535px) { ... }

                "max-xl": { max: "1279px" },
                // => @media (max-width: 1279px) { ... }

                "max-lg": { max: "1023px" },
                // => @media (max-width: 1023px) { ... }

                "max-md": { max: "767px" },
                // => @media (max-width: 767px) { ... }

                "max-sm": { max: "639px" },
                // => @media (max-width: 639px) { ... }
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("daisyui")
    ],
};
