// Open Modal and Display Image
function openModal(element) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "block";
    modalImg.src = element.querySelector("img").getAttribute("data-full");
}

// Close Modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
