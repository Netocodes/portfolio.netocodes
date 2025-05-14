module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  // JIT mode is automatic in Tailwind v3+ (no need to specify)
  
  theme: {
    extend: {
      colors: {
        dark: "#08ecec",
        light: "#1013d7",
      },
      animation: {
        scrollDown: 'scrollDown 2s infinite',
      },
      keyframes: {
        scrollDown: {
          '0%': { 
            opacity: '0',
            transform: 'rotate(-45deg) translate(0, 0)',
          },
          '50%': { 
            opacity: '1',
          },
          '100%': { 
            opacity: '0',
            transform: 'rotate(-45deg) translate(-10px, 10px)',
          },
        },
      },
    },
  },

  // Variants are handled differently in Tailwind v3+ (no 'variants' key needed)
  // Instead, use 'safelist' for dynamic classes or enable variants in plugin:
  plugins: [
    // Enable custom variants (Tailwind v3+ syntax)
    function({ addVariant }) {
      addVariant('group-active', ':merge(.group):active &');
      addVariant('peer-active', ':merge(.peer):active ~ &'); // Ensure peer-active is defined
    },
  ],
};