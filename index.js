const modal = document.getElementById("myModal");
const thankYouModal = document.getElementById("thankYouModal");
const closeModal = document.querySelector(".close");
const exploreBtn = document.getElementById("exploreBtn");
const thankYouClose = document.getElementById("thankYouClose");

closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

exploreBtn.addEventListener("click", () => {
    modal.style.display = "none";
    thankYouModal.style.display = "flex";
});

thankYouClose.addEventListener("click", () => {
    thankYouModal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
    if (event.target === thankYouModal) {
        thankYouModal.style.display = "none";
    }
});