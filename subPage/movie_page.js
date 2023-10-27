let trailer_middle_pause = document.querySelector('.fa-circle-play');
let trailer_customize = document.querySelector('.trailer_customize');
trailer_middle_pause.addEventListener('click', () => {
    // console.log(trailer_customize);
    if(trailer_customize.play()) console.log("playing");
    trailer_customize.setAttribute("controls","");
    trailer_middle_pause.classList.remove('fa-circle-play');
})