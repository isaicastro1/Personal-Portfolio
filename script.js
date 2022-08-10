let menu = document.getElementById('checkbox');
let nav = document.getElementById('nav');
let refs = document.getElementById('refs');
let checkbox = document.getElementById('checkbox');

let num = 1;

let viewportWidth = window.innerWidth;

window.addEventListener('load', updateNavBar);
window.addEventListener('resize', updateNavBar);

// Nav Bar Opening and closing 
menu.addEventListener('click', () => {
    if (num % 2 === 0) {
        refs.style.display = 'none';
        num++;
        nav.classList.toggle('open');
        console.log(num);
        return;
    }
    nav.classList.toggle('open');
    refs.style.display = 'block';
    num ++;
    console.log(num);
});

function updateNavBar ()  {

    viewportWidth = window.innerWidth;

    if (viewportWidth > 700) {
        nav.classList.remove('open');
        console.log('VW > 700',num);
        refs.style.display = 'flex';
        // console.log('more than 700px', 'checkbox:', checkbox.checked);
        checkbox.checked = false;
        return;
    }
    if (!checkbox.checked) {
        nav.classList.remove('open');
        // checkbox.checked = false;
        refs.style.display = 'none';
        console.log('VW < 700',num);
    }
    // console.log('less than 700px', 'checkbox:' , checkbox.checked);
};

