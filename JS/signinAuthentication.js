const nav_right = document.querySelector('.nav_right');
window.addEventListener('load', () => {
    if(localStorage.getItem('userDetails')){
        const a = document.createElement('a');
        a.setAttribute('class', 'userDetails');
        nav_right.appendChild(a);
        const div = document.createElement('div');
        div.setAttribute('class', 'same_border right_sign_up')
        a.appendChild(div);
        div.innerHTML = `<i class="fa-regular fa-user"></i>`;
    } else {
        const anchorDiv = document.createElement('a');
        const signUpNewDiv = document.createElement('div');
        const accessNav = document.querySelector(".nav_right");
        anchorDiv.setAttribute("href","signup/signup.html");
        anchorDiv.appendChild(signUpNewDiv);
        signUpNewDiv.setAttribute("class", "same_border right_sign_up");
        signUpNewDiv.setAttribute("id", "sign_up");
        signUpNewDiv.textContent = "Sign Up";
        accessNav.appendChild(anchorDiv);
    }
})