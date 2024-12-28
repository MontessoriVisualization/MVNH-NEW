const images = document.querySelectorAll('.image-container .main-img');
let currentIndex : Number = 0;

function showNextImage() {
    // Remove 'active' from the current image
    images[currentIndex].classList.remove('active');

    // Move to the next image
    currentIndex = (currentIndex + 1) % images.length;

    // Add 'active' to the next image
    images[currentIndex].classList.add('active');
}

// Change images every 3 seconds
setInterval(showNextImage, 3000);


function chequeBgcolor() {
    const body = document.body;
    const styleBody = window.getComputedStyle(body);
    const isDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches;

    return isDarkMode;
}

const root = document.documentElement;
if (chequeBgcolor()) {
    // Set CSS variable dynamically when body background is black
    root.style.setProperty('--mainBg', 'black');
    root.style.setProperty('--hello', '0% 0%');
    root.style.setProperty('--background', '#0e0e0e');
    root.style.setProperty('--login', '#555555');
    root.style.setProperty('--color', 'white')

} else {
    // Set CSS variable to a different value if background is not black
    root.style.setProperty('--hello', '100% 40%');
    root.style.setProperty('--background', 'white');
    root.style.setProperty('--login', '#d5d0d0');
    root.style.setProperty('--color', 'black')
    root.style.setProperty('--wtkm', ' #0e0e0e')

}



function mskd() {
    const passwordInput = document.getElementById('btkn')
    const toggleButton = document.getElementById('smpk')
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Change to text to show the password
        toggleButton.textContent = 'Hide'; // Update button text
    } else {
        passwordInput.type = 'password'; // Change back to password to hide it
        toggleButton.textContent = 'Show'; // Update button text
    }
}


const change = document.getElementById('btkn');



change.addEventListener('input', () => {
    const skns = document.getElementById('smpk');
    const bts = document.querySelector('.nmks')
    skns.style.display = 'block'
    bts.classList.add('ltms');

    if (change.value.trim() === '') {
        // Show the message if the input is empty
        bts.classList.remove('ltms');

        skns.style.display = 'none'
    }
})

const bktuser = document.getElementById('jkts');
bktuser.addEventListener('input', () => {
    const btns = document.querySelector('.nmbk')
    btns.classList.add('ltms');

    if (bktuser.value.trim() === '') {
        btns.classList.remove('ltms');
    }
})
