//Sidebar
const menuItem = document.querySelectorAll('.menu-item');

//Messages
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = document.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

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
    console.log(e.target)
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none'
    }
}
themeModal.addEventListener('click', closeThemeModal)

//remove active class from spans or font size selectors
let removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

/* ============== Font Size =========================*/

fontSizes.forEach(size => {
    

    size.addEventListener('click', () => {
        removeSizeSelector()
        let fontSize;
        size.classList.toggle('active')
        if(size.classList.contains('font-size-1')) {
            fontSize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontSize = "13px";
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        } else if (size.classList.contains('font-size-3')) {
            fontSize = "16px";
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontSize = "19px";
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontSize = "22px";
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }

            // change the font size of the root html element
            document.querySelector('html').style.fontSize = fontSize;
    })

})

/* =======Change primary colors ======== */

//remove active class from the colors

const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primeryHue;

        if(color.classList.contains('color-1')){
            primeryHue = 252;
        } else if(color.classList.contains('color-2')){
            primeryHue = 52;
        } else if(color.classList.contains('color-3')){
            primeryHue = 352;
        } else if(color.classList.contains('color-4')){
            primeryHue = 152;
        } else if(color.classList.contains('color-5')){
            primeryHue = 202;
        }
        changeActiveColorClass();
        color.classList.add('active');
        root.style.setProperty('--primery-color-hue', primeryHue)
    })
})

/* ============Theme background values ==============*/

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

bg1.addEventListener('click', () => {
    //add active class
    bg1.classList.add('active');
    //remove active class ftom others
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    //remove customized changes from local storage
    window.location.reload();
})

bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    //add active class
    bg2.classList.add('active');
    //remove active class ftom others
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBg();
});

bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    //add active class
    bg3.classList.add('active');
    //remove active class ftom others
    bg1.classList.remove('active');
    bg2.classList.remove('active');
    changeBg();
})