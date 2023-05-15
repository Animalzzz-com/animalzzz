// const navBar = document.querySelector("#top");
// navBar.addEventListener('click', function(event) {
//     dropdownMenu.classList.toggle('links')
// })

const mainMenuLink = document.querySelector('#mainMenu');
const dropdownMenu = document.querySelector('.menu');
mainMenuLink.addEventListener('click', function(event) {
  dropdownMenu.classList.toggle('hidden')
})