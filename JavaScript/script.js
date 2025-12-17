document.addEventListener("DOMContentLoaded", function () {
    const mapBox = document.getElementById("mapBox");

    if (mapBox) {
        mapBox.addEventListener("click", function () {
            window.open(
                "https://maps.app.goo.gl/gLt6sbJKPmXSbFwH8",
                "_blank"
            );
        });
    }
});

// Scroll animation for all sections
const observers = document.querySelectorAll('.animate');

const revealOnScroll = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, {threshold: 0.2});

observers.forEach(sec => {
    revealOnScroll.observe(sec);
});

