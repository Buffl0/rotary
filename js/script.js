let navBackground = document.querySelector('img.background-img');  
let nav = document.querySelector('nav');
let hasScrolled = false;

function changeNavBackground() {
    if (!hasScrolled) {
        hasScrolled = true;
        window.scrollTo({
            top: navBackground.offsetHeight,
            behavior: 'smooth'
        });
    }

    if (window.scrollY > nav.offsetHeight) {
        nav.style.backgroundColor = "var(--clr-main)";
    } else {
        nav.style.backgroundColor = "transparent";
    }
}

window.addEventListener('scroll', changeNavBackground);




window.onload = function() {
    let slides = document.getElementsByClassName('slide');
    let dots = document.getElementsByClassName('dot');
    function addActive(slide){
        slide.classList.add('active');
    }
    function removeActive(slide) {
        slide.classList.remove('active');
    }

    addActive(slides[0]);
    setInterval(function () {
        for (let i = 0; i < slides.length; i++) {
            if (i + 1 == slides.length) {
                addActive(slides[0]);
                setTimeout(removeActive, 3000, slides[i]);
                break;
            }
            if (slides[i].classList.contains('active')) {
                setTimeout(removeActive, 3000, slides[i]);
                addActive(slides[i + 1]);
                break;
            }
        }
    }, 3000);
}