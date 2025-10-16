/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        beige: {
          light: 'var(--beige-light)',
          DEFAULT: 'var(--beige)',
          dark: 'var(--beige-dark)',
        },
        accent: {
          light: 'var(--accent-light)',
          dark: 'var(--accent-dark)',
        },
        text: {
          light: 'var(--text-light)',
          dark: 'var(--text-dark)',
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.liquid-glass': {

          overflow: 'hidden',
          
        
          backdropFilter: 'blur(16px) saturate(100%)',
          WebkitBackdropFilter: 'blur(16px) saturate(100%)',
          
     
          background: 'rgba(232, 199, 185, 0.15)', 
          
   
          border: '1px solid rgba(232, 199, 185, 0.1)',
          

          boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
          
          transition: 'all 0.3s ease',
          
      
          '> *': {

          },
          
          '&:hover': {
            background: 'rgba(232, 199, 185, 0.2)',
            border: '1px solid rgba(232, 199, 185, 0.15)',
          },
        },
        
   
        '.dark .liquid-glass': {
  
          background: 'rgba(46, 46, 46, 0.4)', 
          
       
          border: '1px solid rgba(255, 255, 255, 0.06)',
          

          boxShadow: `
            0 8px 24px rgba(0, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.03)
          `,
          
          '&:hover': {
            background: 'rgba(46, 46, 46, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          },
        },
      });
    },
  ],
};