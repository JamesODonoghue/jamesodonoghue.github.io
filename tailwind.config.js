const colors = require('tailwindcss/colors')

module.exports = {
    purge: [],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter'],
                serif: ['Recoleta'],
            },
            colors: {
                teal: colors.teal,
                orange: colors.orange,
                gray: colors.blueGray,
                cyan: colors.cyan,
            },
        },
    },
    variants: {
        extend: {
            textColor: ['hover'],
        },
    },
    plugins: [],
}
