//burger menu

const mainBody = document.querySelector('body')
const iconMenu = document.querySelector('.menu-icon');
if (iconMenu) {
    const menuBody = document.querySelector('.menu');
    iconMenu.addEventListener("click", function (e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
    
};


//lightbox

const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);


const images = document.querySelectorAll('img');
images.forEach(image => 
    image.addEventListener('click', e => {
        lightbox.classList.add('active')
        const img = document.createElement('img')
        img.src = image.src
        while(lightbox.firstChild) {
            lightbox.removeChild(lightbox.firstChild)
        }
        lightbox.appendChild(img)
    }));



const textBox = document.createElement('div');
textBox.id = 'textbox';
document.body.appendChild(textBox);



const buttons = document.querySelectorAll('.button');
buttons.forEach(button => 
    button.addEventListener('click', e => {
        textBox.classList.add('active')
        lightbox.classList.add('active')
    }));



lightbox.addEventListener('click', e => {
    lightbox.classList.remove('active')
    textBox.classList.remove('active')
});


//accordeon

document.querySelectorAll('.accordeon_trigger').forEach((item) => 
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('accordeon_item_active')) {
            parent.classList.remove('accordeon_item_active');
        } else {
            document
                .querySelectorAll('.accordeon_item')
                .forEach((child) => child.classList.remove('accordeon_item_active'))

            parent.classList.add('accordeon_item_active');
        }
    })
);







