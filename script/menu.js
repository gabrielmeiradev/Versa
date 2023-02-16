const container = document.querySelector('.menu-hamburger');
const label = document.querySelector('.menu-hamburger-label');
const icon = document.querySelector('.menu-hamburger-icon');
const navbar = document.querySelector('.navbar-link')

function toggleMenu(){
    if(navbar.classList.contains('collapsed')){
        label.textContent = 'Menu'
        icon.innerHTML = 'menu'
    } else {
        label.textContent = 'Fechar'
        icon.innerHTML = 'close'
    }

    navbar.classList.toggle('collapsed')
}

container.addEventListener('click', () => {
   toggleMenu()
})

const servicosBannerButton = document.querySelector('#servicos-banner-button');

servicosBannerButton.addEventListener('click', () => {
    toggleMenu();
})
