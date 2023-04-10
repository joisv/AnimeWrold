const visible = document.querySelector('.home-visible')
const alertt = document.querySelector('#alert')
const genre = document.querySelector('.genre-visible')
const genreSvg = document.querySelector('.svg-genre')
const mobileNav = document.querySelector('.mobile-nav')

const checkbox = document.getElementById('toggle');
const body = document.documentElement;
const dot = document.querySelector('.dot');
let dark = localStorage.getItem('dark') === 'true';

if (dark) {
  body.classList.add('dark');
  dot.classList.add('translate-x-full');
} else {
  body.classList.remove('dark');
  dot.classList.remove('translate-x-full');
}
checkbox.addEventListener('change', function() {
  dark = !dark;
  localStorage.setItem('dark', dark);
  body.classList.toggle('dark');
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

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "grid";
  evt.currentTarget.className += " active";
}

// Set the default tab to be active
document.getElementById("defaultOpen").click();

