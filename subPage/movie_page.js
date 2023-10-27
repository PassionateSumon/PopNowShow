let trailer_middle_pause = document.querySelector('.fa-circle-play');
let trailer_customize = document.querySelector('.trailer_customize');
trailer_middle_pause.addEventListener('click', () => {
    console.log("abc");
    trailer_middle_pause.classList.toggle('fa-circle-pause');
})