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

// Displays the rankings stored in JSON files, requires the name of the file and ID of the table being added to
function displayTop10Rankings(fileName, tableID){
    fetch(fileName)
        .then((response) => response.json())
        .then(rankings =>{
            for(let i = 0; i < 10; i++) {
                if (rankings[i].Ranking != null) {
                const newRow = document.createElement('tr');
                newRow.innerHTML = `
                    <td>${rankings[i].Ranking}</td>
                    <td>${rankings[i].Name}</td>
                    <td>${rankings[i].Age}</td>
                    <td>${rankings[i].Country}</td>
                    <td>${rankings[i].Points}</td>
                `;
                document.getElementById(tableID).appendChild(newRow);
                }
            }
        }).catch(error => {
        console.error('Error fetching data:', error);
    });
}

// Call functions
showImages();
displayTop10Rankings('../atp-rankings.json', 'atp-table');
displayTop10Rankings('../wta-rankings.json', 'wta-table');