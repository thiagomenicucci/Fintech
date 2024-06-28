const hamburgerIcon = document.querySelector('assets/images/menu_24dp_FILL0_wght400_GRAD0_opsz24.png');
const navigationMenu = document.querySelector('.navigation-menu');

hamburgerIcon.addEventListener('click', () => {
    // Alternar a exibição do menu
    if (navigationMenu.style.display === 'block') {
        navigationMenu.style.display = 'none';
    } else {
        navigationMenu.style.display = 'block';
    }
});