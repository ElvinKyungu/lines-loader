/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,vue,ts}",
  ],
  theme: {
    extend: {
      animation: {
        'bees-line': 'beesLine 4s linear infinite',
        'bees-line2': 'beesLine2 4s linear infinite',
      },
      keyframes: {
        beesLine: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        beesLine2: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      boxShadow: {
        'ring1': '0 0 0 5px rgba(36, 236, 255, 0.2), 0 0 0 10px rgba(36, 236, 255, 0.14), 0 0 0 20px rgba(36, 236, 255, 0.1), 0 0 20px #24ecff, 0 0 50px #24ecff',
        'ring2': '0 0 0 5px rgba(147, 255, 45, 0.2), 0 0 0 10px rgba(147, 255, 45, 0.14), 0 0 0 20px rgba(147, 255, 45, 0.1), 0 0 20px #93ff2d, 0 0 50px #93ff2d',
        'ring3': '0 0 0 5px rgba(228, 28, 248, 0.2), 0 0 0 10px rgba(228, 28, 248, 0.14), 0 0 0 20px rgba(228, 28, 248, 0.1), 0 0 20px #e41cf8, 0 0 50px #e41cf8',
      },
    },
  },
  plugins: [],
}
