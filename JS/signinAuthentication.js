const nav_right = document.querySelector('.nav_right');
window.addEventListener('load', () => {
    if(localStorage.getItem('userDetails')){
        const a = document.createElement('a');
        nav_right.appendChild(a);
        const div = document.createElement('div');
        div.setAttribute('class', 'same_border right_sign_up')
        a.appendChild(div);
        div.innerHTML = `<i class="fa-regular fa-user"></i>`;
    }
})