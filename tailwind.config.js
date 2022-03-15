module.exports = {
  content: ["./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      colors: {
        "red-desaturate": "hsl(0, 36%, 70%)",
        "red-soft": "hsl(0, 93%, 68%)",
        "red-gray": "hsl(0, 6%, 24%)",
        "start-1": "hsl(0, 0%, 100%)",
        "start-2": "hsl(0, 80%, 86%)",
        "stop-1": "hsl(0, 100%, 98%)",
        "stop-2": "hsl(0, 74%, 74%)",
      },
      fontFamily: {
        primary: ["Josefin Sans", "sans-serif"],
      },
      letterSpacing: {
        widest: ".25em",
      },
    },
  },
  plugins: [],
};
