// menu
const menTop = document.querySelector(".menu__top")
const menu = document.querySelector(".menu")

menTop.addEventListener("click", () => {
    menu.classList.toggle("menu_visible")
})

// close menu
const goHome = document.querySelector("#link__home")
const goAbility = document.querySelector("#link__ability")
const goAbout = document.querySelector("#link__about")
const goMyAbi= document.querySelector("#link__my-ability")
const goPort = document.querySelector("#link__portfolio")
const goCont= document.querySelector("#link__contact")

goHome.addEventListener("click", () => {
    menu.classList.toggle("menu_visible")
})

goAbility.addEventListener("click", () => {
    menu.classList.toggle("menu_visible")
})

goAbout.addEventListener("click", () => {
    menu.classList.toggle("menu_visible")
})

goMyAbi.addEventListener("click", () => {
    menu.classList.toggle("menu_visible")
})

goPort.addEventListener("click", () => {
    menu.classList.toggle("menu_visible")
})

goCont.addEventListener("click", () => {
    menu.classList.toggle("menu_visible")
})


// slider portafolio
const prevP = document.querySelector(".prev__p")
const nextP = document.querySelector(".next__p")
const slider = document.querySelector(".slider-container")

prevP.addEventListener("click", () => {
    slider.scrollLeft -= 270
})

nextP.addEventListener("click", () => {
    slider.scrollLeft += 270
})

// slider ability
const prevA = document.querySelector(".prev__a")
const nextA = document.querySelector(".next__a")
const ability = document.querySelector(".ability__scroll")

prevA.addEventListener("click", () => {
    ability.scrollLeft -= 270
})

nextA.addEventListener("click", () => {
    ability.scrollLeft += 270
})