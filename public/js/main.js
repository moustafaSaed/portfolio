// Elements  :
const menuIcn = document.querySelector('.menu-icon');



menuIcn.addEventListener("click", function () {
    menuIcn.classList.toggle('active');
    console.log('clicked');
});

const text = "I'm moustafa saeed"; // The text you want to auto-write
const delay = 100; // Delay between each character (in milliseconds)

const typewriter = document.getElementById('typewriter');
let index = 0;

function autoWrite() {
    if (index < text.length) {
        typewriter.textContent += text.charAt(index);
        index++;
        setTimeout(autoWrite, delay);
    }
}
autoWrite();
