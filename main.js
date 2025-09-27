const hamburger = document.getElementById("hamburger")
const menu = document.getElementById("menu")

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active")
})
const slides = document.getElementById("slides")
let index = 0

function showSlide() {
  index = (index + 1) % 3
  slides.style.transform = `translateX(-${index * 50}%)`
}

setInterval(showSlide, 3000)

const filterBtns = document.querySelectorAll(".filter-btn")
const menuCards = document.querySelectorAll(".menu-card")

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // active button
    filterBtns.forEach((b) => b.classList.remove("active"))
    btn.classList.add("active")

    const filter = btn.getAttribute("data-filter")
    menuCards.forEach((card) => {
      if (filter === "all" || card.classList.contains(filter)) {
        card.style.display = "flex"
      } else {
        card.style.display = "none"
      }
    })
  })
})
