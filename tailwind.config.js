/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    colors: {
      cyan: "hsl(158, 36%, 37%)",
      cream: "hsl(30, 38%, 92%)",
      darkBlue: "hsl(212, 21%, 14%)",
      grayishBlue: "hsl(228, 12%, 48%)",
      white: "hsl(0, 0%, 100%)",
      cream: "#F2EAE2",
    },

    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Fraunces", "serif"],
    },

    screens: {
      mobile: "375px",
      desktop: "1440px",
    },

    letterSpacing: {
      widest: "5px",
    },

    fontSize: {
      xxs: "10px",
      xs: "12px",
      ssm: "13px",
      sm: "14px",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2rem",
      "5xl": "3.052rem",
    },

    lineHeight: {
      none: "1",
      177: "1.77",
    },

    borderRadius: {
      none: "0",
      8: "8px",
      "10px": "10px",
    },

    extend: {
      padding: {
        "15px": "15px",
        "24px": "24px",
        "92px": "92px",
      },

      margin: {
        "24px": "24px",
      },

      gap: {
        19: "19px",
      },

      maxWidth: {
        mobile: "343px",
        "295px": "295px",
      },
    },
  },
  plugins: [],
};
