const search_icon_access = document.querySelector('#search_icon');
const search_bar_access = document.querySelector('#search');
const main_body_three_parts_arrow = document.querySelectorAll('.main_body_three_parts_arrow');

//arrow down functionalities--------->>>>>>>>>------------------
main_body_three_parts_arrow.forEach(element => {
    element.addEventListener('mousedown', () => {
        element.style.backgroundColor = '#646464';
    })
    element.addEventListener('mouseup', () => {
        element.style.backgroundColor = '#3f3f3f';
    })
})
//----------------------->>>>>>>>>>>>>>>>>>>>>>-----------------



// search bar functionaliites
// let flag = false;
// search_icon_access.addEventListener('click', () => {
//     const searchBar = document.createElement('input')
//     searchBar.id = 'search_bar'
//     searchBar.type = 'search'
//     searchBar.placeholder = 'Enter Movie Name'
//     searchBar.style.transition = '0.5s'
//     if (flag == false) {
//         search_bar_access.appendChild(searchBar);
//         flag = true;
//     } else {
//         const s = document.querySelector('#search_bar');
//         s.remove();
//         flag = false;
//     }
// });
//----------------------------->>>>>>>>>>>>>>>>>>>>>>>>>

// ********* Drop down Menus ********

let dropDownArrow = document.querySelectorAll('.body_parts');
dropDownArrow.forEach((value) => {
    value.addEventListener('click', () => {
        value.classList.toggle('active_extend_section');
    })
})

setInterval(() => {
    const nav = document.querySelector('nav');
    const userDetails = document.querySelector('.userDetails');
    // ******userdetails action------------>>>>>>>>>>>>>>>
    userDetails.addEventListener('click', () => {
        const logout = document.querySelector('.logout');
        // console.log(logout);
        if (logout != null) {
            logout.innerHTML = '';
        }
        else {
            const div = document.createElement('div');
            div.setAttribute('class', 'logout');
            div.innerHTML = 'LOG OUT'
            nav.append(div);
            console.log('hii');
        }
    })
}, 30)

let filterMenu = document.querySelector('.filter_drop_down_off');
filter.addEventListener('click', () => {
    filterMenu.classList.toggle('filter_drop_down_on');
})

let sunMoon = document.querySelector('.fa-sun');
bw_mode.addEventListener('click', () => {
    sunMoon.classList.toggle('fa-moon');
})

let filterArrow = document.querySelector('.fa-angle-down');
filter.addEventListener('click', () => {
    filterArrow.classList.toggle('fa-angle-up');
})
