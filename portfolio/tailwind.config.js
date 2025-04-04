module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "path/to/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
      "path/to/@material-tailwind/react/theme/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          dark:"#08ecec",
          light:"#1013d7",
        }
      },
    },
    plugins: [],
  }