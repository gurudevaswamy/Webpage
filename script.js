// Select modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeModal = document.getElementsByClassName("close")[0];

// Add click event to each image in the gallery
document.querySelectorAll(".gallery .photo img").forEach((img) => {
    img.addEventListener("click", function() {
        modal.style.display = "block";
        modalImg.src = this.getAttribute("data-fullsize");
    });
});

// Close the modal when clicking on the "X"
closeModal.onclick = function() {
    modal.style.display = "none";
};

// Close the modal when clicking outside the image
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
