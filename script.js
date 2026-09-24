// Open the birthday letter

function openLetter() {

    const letter = document.getElementById("letterModal");

    letter.style.display = "flex";
}


// Close the birthday letter

function closeLetter() {

    const letter = document.getElementById("letterModal");

    letter.style.display = "none";
}


// Open the video

function openVideo() {

    const videoModal = document.getElementById("videoModal");

    videoModal.style.display = "flex";
}


// Close the video

function closeVideo() {

    const videoModal = document.getElementById("videoModal");

    const video = document.getElementById("birthdayVideo");

    videoModal.style.display = "none";

    // Stop the video when the popup closes
    video.pause();

    video.currentTime = 0;
}


// Close popup if user clicks outside the card

window.onclick = function(event) {

    const letterModal = document.getElementById("letterModal");

    const videoModal = document.getElementById("videoModal");

    if (event.target === letterModal) {

        closeLetter();

    }

    if (event.target === videoModal) {

        closeVideo();

    }
};