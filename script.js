let menu = document.getElementById('checkbox');
let nav = document.getElementById('nav');
let wrapper = document.getElementById('wrapper');
let checkbox = document.getElementById('checkbox');
let navWrapper = document.getElementById('nav');
let myName = document.getElementById('my-name');
let subtitle = document.getElementById('subtitle');

// NAV BAR TRANSITIONS

menu.addEventListener('click', () => {

    wrapper.classList.toggle('open-nav');
    wrapper.style.zIndex = -2;

    wrapper.ontransitionend = () => {
        wrapper.style.zIndex = 2;
    }
    
    wrapper.style.zIndex = -2;

    }
);

// ENDS NAV BAR

window.addEventListener('load', () => {
    setTimeout(() => {
        myName.classList.remove('name');
        subtitle.style.visibility = 'visible';
        subtitle.classList.add('sub');
    }, 5000)
})

















