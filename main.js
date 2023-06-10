const menuButton = document.querySelector('#menu');
const menuLinks = document.querySelector('.links');
menuButton.addEventListener('click', function(event) {
    menuLinks.classList.toggle('menuHidden')
})