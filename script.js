let menu = document.getElementById('checkbox');
let nav = document.getElementById('nav');
let wrapper = document.getElementById('wrapper');
let checkbox = document.getElementById('checkbox');

let num = 1;

let viewportWidth = window.innerWidth;

window.addEventListener('load', updateNavBar);
window.addEventListener('resize', updateNavBar);

// Nav Bar Opening and closing 
menu.addEventListener('click', () => {

    wrapper.classList.toggle('open-nav');
    setTimeout(() => {
        wrapper.style.zIndex = 0;
    }, 600)
    wrapper.style.zIndex = -1;
    }
);

function updateNavBar ()  {
    // viewportWidth = window.innerWidth;
};

