module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'r1': 'var(--border-radius-1)',
        'r2': 'var(--border-radius-2)',
      },
      colors: {
        'th-primary': 'var(--primary-color)',
        'th-accent': 'var(--accent-color)',
        'th-secondary': 'var(--secondary-color)',
        'th-secondary-accent': 'var(--secondary-accent-color)',
        'th-success': 'var(--success-color)',
        'th-error': 'var(--error-color)',
        'th-warning': 'var(--warning-color)',
      },
    },
  },
  plugins: [],
}