// When the user scrolls down 350px from the top of the document => change navbar style
window.onscroll = () => {
    scrollFct()
};

let scrollFct = () => {
    const navbar = document.getElementById("navbar");
    const navIcon = document.getElementById('nav-icon');

    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        // navbar.classList.add('fixed-top');
        navbar.style.position = 'fixed';
        navbar.style.top = '0';

        navbar.classList.add('py-4');
        navbar.classList.add('shadow-sm');
        navIcon.classList.remove('d-none');
    } else {
        // navbar.classList.remove('fixed-top');
        navbar.style.position = 'sticky';
        navbar.style.top = '-92px';
        
        navIcon.classList.add('d-none');
    }
}