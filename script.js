let imageIndex = 0;
const images = document.querySelectorAll('.slideshowImages img');

// Function which changes which image is on display after a number of seconds by removing the current image from the 'active' class and adding the next image
function showImages() {
    images.forEach(image => {
        image.classList.remove('active');
    });

    imageIndex++;
    if (imageIndex > images.length) {
        imageIndex = 1;
    }

    images[imageIndex - 1].classList.add('active');

    setTimeout(showImages, 5000);
}

showImages(); // Show the images