document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let navToggle = document.querySelector('.navToggle');
let nav = document.querySelector('.header__nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('header__show');
})

document.getElementById('burger').addEventListener('click', function () {
    this.classList.toggle('toggle');
});

let header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    let scrollShow = scrollY;

    if (scrollShow > 860) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }

    console.log(scrollShow);
})