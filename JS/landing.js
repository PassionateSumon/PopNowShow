const search_icon_access = document.querySelector('#search_icon');
const search_bar_access = document.querySelector('#search');
const main_body_three_parts_arrow = document.querySelectorAll('.main_body_three_parts_arrow');

//arrow down functionalities--------->>>>>>>>>
main_body_three_parts_arrow.forEach(element => {
    element.addEventListener('mousedown', () => {
        element.style.backgroundColor = '#646464';
    })
    element.addEventListener('mouseup', () => {
        element.style.backgroundColor = '#3f3f3f';
    })
})
//----------------------->>>>>>>>>>>>>>>>>>>>>>



// search bar functionaliites
let flag = false;
search_icon_access.addEventListener('click', () => {
    const searchBar = document.createElement('input')
    searchBar.id = 'search_bar'
    searchBar.type = 'search'
    searchBar.placeholder = 'Enter Movie Name'
    searchBar.style.transition = '0.5s'
    if(flag == false) {
        search_bar_access.appendChild(searchBar);
        flag = true;
    } else {
        const s = document.querySelector('#search_bar');
        s.remove();
        flag = false;
    }
});
//----------------------------->>>>>>>>>>>>>>>>>>>>>>>>>