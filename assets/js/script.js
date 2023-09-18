// -----------------------image gallery start---------------------------
const images = document.querySelectorAll('.image');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const closeButton = document.querySelector('.close-button');

images.forEach((image) => {
    image.addEventListener('click', () => {
        const imgSrc = image.querySelector('img').src;
        modalContent.src = imgSrc;
        modal.style.display = 'block';
    });
});

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


// -----------------------image gallery end---------------------------

