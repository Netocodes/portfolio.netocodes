module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          dark:"#08ecec",
          light:"#1013d7",
        }
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
    
    plugins: [
      function({ addVariant }) {
        addVariant('group-active', ':merge(.group):active &');
      },
    ],
  }