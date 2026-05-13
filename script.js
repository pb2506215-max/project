const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",() =>{
    // toggle menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
// close the menu when close button is clicked
menuCloseButton.addEventListener("click",() => menuOpenButton.click());