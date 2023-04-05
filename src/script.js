const visible = document.querySelector('.home-visible')
const alertt = document.querySelector('#alert')
const genre = document.querySelector('.genre-visible')
const genreSvg = document.querySelector('.svg-genre')
const mobileNav = document.querySelector('.mobile-nav')

const checkbox = document.getElementById('toggle');
checkbox.addEventListener('change', function() {
    const body = document.documentElement;
  body.classList.toggle('dark');
  const dot = document.querySelector('.dot');
  dot.classList.toggle('translate-x-full');
});

const menuHover = () => {
    visible.classList.toggle('hidden')
}

const handleButtonClose = () => {
    alertt.remove()
}

const handleButtonNavbar = () => {
    mobileNav.classList.toggle('-translate-x-full')
}

const handleButtonGenre = () => {
    genre.classList.toggle('hidden')
    genre.classList.toggle('grid')
    genreSvg.classList.toggle('rotate-[]')
}