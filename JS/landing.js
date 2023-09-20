const search_icon_access = document.querySelector('#search_icon');
const search_bar_access = document.querySelector('#search');

let flag = false
search_icon_access.addEventListener('click', () => {
    const searchBar = document.createElement('input')
    searchBar.id = 'search_bar'
    searchBar.type = 'search'
    searchBar.placeholder = 'Enter Movie Name'
    searchBar.style.transition = '0.5s'
    if(flag == false) {
        search_bar_access.appendChild(searchBar)
        flag = true;
    } else {
        const s = document.querySelector('#search_bar')
        s.remove()
        flag = false;
    }
})
