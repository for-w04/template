const emoji = document.querySelector('.emoji');

function zoomInOut() {
    emoji.classList.toggle('zoom-in');
    emoji.classList.toggle('zoom-out');
}

setInterval(zoomInOut, 1000);
