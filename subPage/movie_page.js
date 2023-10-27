let trailer_middle_pause = document.querySelector('.fa-circle-play');
let thumbnail = document.querySelector('.thumbnail');
let trailer_customize = document.querySelector('.trailer_customize');
trailer_middle_pause.addEventListener('click', () => {
    trailer_customize.play();
    thumbnail.style.display = 'none'
    trailer_customize.setAttribute("controls", "");
    trailer_middle_pause.classList.remove('fa-circle-play');
})