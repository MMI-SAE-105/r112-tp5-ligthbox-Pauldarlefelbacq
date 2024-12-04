// *** LIGHTBOX ***
const lightbox = document.querySelector("#lightbox");
const imglist = document.querySelectorAll('ul li img');
const lightboxImg = lightbox.querySelector("img");

imglist.forEach((imglist) => {
    imglist.addEventListener('click', () => {
        const imgsrc = event.target.dataset.imgsrc;
        lightbox.showModal();
    });
});

lightbox.addEventListener('click', (evt) => {
    if (evt.target === lightbox) {
        lightbox.close();
    };
});