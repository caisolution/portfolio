const images = [
    "docs/SystemConfig.jpg",
    "docs/Flowchart.jpg",
    "docs/TableLayout.jpg"
];

let currentIndex = 0;
let zoom = 1;
let startX = 0;
let endX = 0;

function openModal(src) {
    currentIndex = images.indexOf(src);
    document.getElementById("modal").style.display = "block";
    zoom = 1;
    showImage();
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    zoom = 1;
}

function showImage() {
    const img = document.getElementById("modalImg");
    img.src = images[currentIndex];
    img.style.transform = `scale(${zoom})`;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    zoom = 1;
    showImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    zoom = 1;
    showImage();
}

function zoomIn() {
    zoom += 0.2;
    showImage();
}

function zoomOut() {
    zoom -= 0.2;
    if (zoom < 0.5) zoom = 0.5;
    showImage();
}

document.addEventListener("keydown", function(e) {
    if (document.getElementById("modal").style.display === "block") {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
    }
});

const modalImg = document.getElementById("modalImg");

modalImg.addEventListener("wheel", function(e) {
    e.preventDefault();
    if (e.deltaY < 0) {
        zoom += 0.1;
    } else {
        zoom -= 0.1;
        if (zoom < 0.5) zoom = 0.5;
    }
    showImage();
});

modalImg.addEventListener("touchstart", function(e) {
    startX = e.touches[0].clientX;
});

modalImg.addEventListener("touchend", function(e) {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
});

function handleSwipe() {
    const diff = startX - endX;

    if (Math.abs(diff) < 50) return;

    if (diff > 0) {
        nextImage();
    } else {
        prevImage();
    }
}
function backgroundClick(e) {
    if (e.target.id === "modal") {
        closeModal();
    }
}
