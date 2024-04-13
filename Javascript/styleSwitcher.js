        // Get the theme switcher element
        const themeSwitcher = document.getElementById('themeSwitcher');

        // Add event listener for theme change
        themeSwitcher.addEventListener('change', function() {
            // Get the selected theme value
            const selectedTheme = themeSwitcher.value;
            
            // Get the existing theme link element
            const themeLink = document.getElementById('theme');

            // Update the href attribute to the selected theme file
            themeLink.href = selectedTheme;
        });