document.querySelectorAll("img").forEach(function (img) {
    img.setAttribute("draggable", "false");
});

// Bouton retour en haut
var scrollToTopButton = document.getElementById("scrollToTopButton");

if (scrollToTopButton) {
    window.addEventListener("scroll", function () {
        scrollToTopButton.classList.toggle("visible", window.scrollY > 300);
    });

    scrollToTopButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Visionneuse photos (page réalisations)
var lightbox = document.getElementById("lightbox");

if (lightbox) {
    var lightboxImg = lightbox.querySelector("img");
    var photos = Array.from(document.querySelectorAll(".galerie img"));
    var current = 0;

    function show(index) {
        current = (index + photos.length) % photos.length;
        lightboxImg.src = photos[current].src;
        lightboxImg.alt = photos[current].alt;
    }

    function close() {
        lightbox.classList.remove("open");
        document.body.style.overflow = "";
    }

    photos.forEach(function (photo, index) {
        photo.addEventListener("click", function () {
            show(index);
            lightbox.classList.add("open");
            document.body.style.overflow = "hidden";
        });
    });

    lightbox.querySelector(".lb-close").addEventListener("click", close);
    lightbox.querySelector(".lb-prev").addEventListener("click", function () { show(current - 1); });
    lightbox.querySelector(".lb-next").addEventListener("click", function () { show(current + 1); });

    lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox) close();
    });

    document.addEventListener("keydown", function (e) {
        if (!lightbox.classList.contains("open")) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowLeft") show(current - 1);
        if (e.key === "ArrowRight") show(current + 1);
    });
}
