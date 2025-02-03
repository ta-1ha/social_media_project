// menu items active class
// sidebar
const menuitems = document.querySelectorAll('.menu-items');

// messages
const messagenotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messagesearch = document.querySelector('#message-search');



// theme
const theme = document.querySelector('#theme');
const thememodel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');
const colorPallete = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');

// remove active class

const changeactive = () => {
    menuitems.forEach(item => {
        item.classList.remove('active');


    })

}
menuitems.forEach(item => {
    item.addEventListener('click', () => {
        changeactive();
        item.classList.add('active');
        if (item.id != 'notifications') {
            document.querySelector('.notification-popup').
            style.display = 'none';
        } else {
            document.querySelector('.notification-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})

// Messages

// search chats func
const searchmessage = () => {
    const val = messagesearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })

}

// search chat
messagesearch.addEventListener('keyup', searchmessage)

// highlights msgbox when click on msg 
messagenotification.addEventListener('click', () => {
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagenotification.querySelector('.notification-count').style.display = 'none'
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000)
})



// theme 
theme.addEventListener('click', () => {
        thememodel.style.display = 'grid';

    })
    //close the model


const closemodel = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        thememodel.style.display = 'none';
    }
}
thememodel.addEventListener('click', closemodel)
    // remove active class from span


// Font sizes changing


const removesizeselector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}


fontSizes.forEach(size => {


    size.addEventListener('click', () => {
        let fontsize;
        removesizeselector();
        size.classList.toggle('active');

        if (size.classList.contains('font-size-1')) {
            fontsize = '10px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        } else if (size.classList.contains('font-size-2')) {
            fontsize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');

        } else if (size.classList.contains('font-size-3')) {
            fontsize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        } else if (size.classList.contains('font-size-4')) {
            fontsize = '19px';
            root.style.setProperty('----sticky-top-left', '-5rem');
            root.style.setProperty('----sticky-top-right', '-25rem');
        } else if (size.classList.contains('font-size-5')) {
            fontsize = '22px';
            root.style.setProperty('----sticky-top-left', '-10rem');
            root.style.setProperty('----sticky-top-right', '-33rem');
        }
        document.querySelector('html').style.fontSize = fontsize;

    })
})


// change primary color

const coloractivechange = () => {
    colorPallete.forEach(color => {
        color.classList.remove('active');
    })
}
colorPallete.forEach(
    color => {

        color.addEventListener('click', () => {
            let primary;
            coloractivechange();
            if (color.classList.contains('color1')) {

                primaryHue = 252;
            } else if (color.classList.contains('color2')) {
                primaryHue = 52;
            } else if (color.classList.contains('color3')) {
                primaryHue = 352;
            } else if (color.classList.contains('color4')) {
                primaryHue = 152;
            } else if (color.classList.contains('color5')) {
                primaryHue = 202;
            }

            color.classList.add('active');

            root.style.setProperty('--primary-color-hue', primaryHue)


        })
    }
)


// theme backgroun color

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;
// change bg
const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
}


Bg1.addEventListener('click',
    () => {

        // add active class
        Bg1.classList.add('active');

        // remove active class from other
        Bg2.classList.remove('active');
        Bg3.classList.remove('active');
        window.location.reload();
    }
)

Bg2.addEventListener('click',
    () => {
        darkColorLightness = '95%';
        whiteColorLightness = '20%';
        lightColorLightness = '15%';
        // add active class
        Bg2.classList.add('active');

        // remove active class from other
        Bg1.classList.remove('active');
        Bg3.classList.remove('active');
        changeBg();
    }
)




Bg3.addEventListener('click',
    () => {
        darkColorLightness = '95%';
        whiteColorLightness = '10%';
        lightColorLightness = '0%';
        // add active class
        Bg3.classList.add('active');

        // remove active class from other
        Bg1.classList.remove('active');
        Bg2.classList.remove('active');
        changeBg();
    }
)