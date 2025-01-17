const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      red: "var(--six-color-red)",
      black: "var(--six-color-black)",
      white: "var(--six-color-white)",
      indigo: "var(--six-color-indigo)",
      rock: {
        50: "var(--six-color-web-rock-50)",
        100: "var(--six-color-web-rock-100)",
        200: "var(--six-color-web-rock-200)",
        300: "var(--six-color-web-rock-300)",
        400: "var(--six-color-web-rock-400)",
        500: "var(--six-color-web-rock-500)",
        600: "var(--six-color-web-rock-600)",
        700: "var(--six-color-web-rock-700)",
        800: "var(--six-color-web-rock-800)",
        900: "var(--six-color-web-rock-900)",
      },
      clay: {
        50: "var(--six-color-clay-50)",
        200: "var(--six-color-clay-200)",
      },
      danger: {
        800: "var(--six-color-danger-800)",
        900: "var(--six-color-danger-900)",
        light: "var(--six-color-danger-light-to-be-defined)",
      },
      warning: {
        700: "var(--six-color-warning-700)",
        800: "var(--six-color-warning-800)",
        light: "var(--six-color-warning-light-to-be-defined)",
      },
      success: {
        500: "var(--six-color-success-500)",
        600: "var(--six-color-success-600)",
        light: "var(--six-color-success-light-to-be-defined)",
      },
      action: {
        500: "var(--six-color-action-500)",
        600: "var(--six-color-action-600)",
        light: "var(--six-color-action-light-to-be-defined)",
      },
      inactive: "var(--six-color-inactive)",
    },
    spacing: {
      "3xs": "var(--six-spacing-xxx-small)",
      "2xs": "var(--six-spacing-xx-small)",
      xs: "var(--six-spacing-x-small)",
      sm: "var(--six-spacing-small)",
      md: "var(--six-spacing-medium)",
      lg: "var(--six-spacing-large)",
      xl: "var(--six-spacing-x-large)",
      "2xl": "var(--six-spacing-xx-large)",
      "3xl": "var(--six-spacing-xxx-large)",
      "4xl": "var(--six-spacing-xxxx-large)",
    },
    extend: {
      fontFamily: {
        mono: "var(--six-font-mono)",
        sans: "var(--six-font-sans)",
        serif: "var(--six-font-serif)",
      },
      fontSize: {
        "3xs": "var(--six-font-size-xxx-small)",
        "2xs": "var(--six-font-size-xx-small)",
        xx: "var(--six-font-size-x-small)",
        sm: "var(--six-font-size-small)",
        md: "var(--six-font-size-medium)",
        lg: "var(--six-font-size-large)",
        xl: "var(--six-font-size-x-large)",
        "2xl": "var(--six-font-size-xx-large)",
        "3xl": "var(--six-font-size-xxx-large)",
        "4xl": "var(--six-font-size-xxxx-large)",
      },
      fontWeight: {
        normal: "var(--six-font-weight-normal)",
        bold: "var(--six-font-weight-bold)",
      },
      letterSpacing: {
        dense: "var(--six-letter-spacing-dense)",
        normal: "var(--six-letter-spacing-normal)",
        loose: "var(--six-letter-spacing-loose)",
      },
      lineHeight: {
        dense: "var(--six-line-height-dense)",
        normal: "var(--six-line-height-normal)",
        loose: "var(--six-line-height-loose)",
      },
      zIndex: {
        header: "var(--six-z-index-header)",
        searchField: "var(--six-z-index-search-field)",
        drawer: "var(--six-z-index-drawer)",
        dropdown: "var(--six-z-index-dropdown)",
        toast: "var(--six-z-index-toast)",
        tooltip: "var(--six-z-index-tooltip)",
        dialog: "var(--six-z-index-dialog)",
      },
      boxShadow: {
        sm: "var(--six-shadow-small)",
        md: "var(--six-shadow-medium)",
        lg: "var(--six-shadow-large)",
      },
      transitionDuration: {
        "x-slow": "var(--six-transition-x-slow)",
        slow: "var(--six-transition-slow)",
        medium: "var(--six-transition-medium)",
        fast: "var(--six-transition-fast)",
        "x-fast": "var(--six-transition-x-fast)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        body: {
          fontFamily: "var(--six-font-family)",
        },
      });
    }),
  ],
};
