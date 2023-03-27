//Sidebar
const menuItem = document.querySelectorAll('.menu-item');

//Messages
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');
const themeModal = document.querySelector('.customize-theme');

//THEME
const theme = document.querySelector('#theme');

/* =========================== Sidebar ===============================*/

// remove active class from all menu items
const changeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove('active')
    })
}

menuItem.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
            document.querySelector('.notification-popup').style.display = 'none';
        } else{
            document.querySelector('.notification-popup').style.display ='block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
});

/* =========================== Messages ===============================*/

//searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(chat => {
        let name = chat.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display='flex';
        } else {
            chat.style.display = 'none'
        }
    })
}

//search chat
messageSearch.addEventListener('keyup', searchMessage)

//hightlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', ()=> {
    messages.style.boxShadow = '0px 0px 2rem var(--color-primery)';
    messagesNotification.querySelector('.notification-count').style.display = 'none'
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000)
});

/* ===========THEME/DISPLAY customization ======*/
// opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid'
}
theme.addEventListener('click', openThemeModal);

//close modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none'
    }
}
themeModal.addEventListener('click', closeThemeModal)

