const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

//when we have the navigation open and we click on a link, it will take us to the link
//and will close the navigation
navLinks.forEach(link => {
  link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
})
})
