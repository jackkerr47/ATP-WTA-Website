let imageIndex = 0; // Current image number on display
const images = document.querySelectorAll('.slideshowImages img'); // All images in the slideshow

// Function which changes which image is on display after a number of seconds by removing the current image from the 'active' class and adding the next image
function showImages() {
    images.forEach(image => {
        image.classList.remove('active');
    });

    imageIndex++;
    if (imageIndex === images.length) {
        imageIndex = 0;
    }

    images[imageIndex].classList.add('active');

    setTimeout(showImages, 5000);
}

function displayRankings(){

}

showImages(); // Show the images