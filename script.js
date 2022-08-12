let menu = document.getElementById('checkbox');
let nav = document.getElementById('nav');
let wrapper = document.getElementById('wrapper');
let checkbox = document.getElementById('checkbox');
 
let viewportWidth = window.innerWidth;

window.addEventListener('load', updateNavBar);
window.addEventListener('resize', updateNavBar);

// Nav Bar Opening and closing 
menu.addEventListener('click', () => {

    wrapper.classList.toggle('open-nav');
    wrapper.style.zIndex = -10;

    wrapper.ontransitionend = () => {
        wrapper.style.zIndex = 2;
        // console.log('Transition has ended');
    }
    wrapper.style.zIndex = -10;

    }
);

function updateNavBar ()  {
    // viewportWidth = window.innerWidth;
};

