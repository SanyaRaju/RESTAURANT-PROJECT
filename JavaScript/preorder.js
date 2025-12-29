document.addEventListener("DOMContentLoaded", () => {

    /* HERO ANIMATION */
    document.querySelector(".hero-animate")?.classList.add("show");

    /* BUTTON STAGGER ANIMATION */
    const buttons = document.querySelectorAll(".btn-animate");
    buttons.forEach((btn, index) => {
        setTimeout(() => {
            btn.classList.add("show");
        }, index * 120);
    });

    /* SCROLL ANIMATION FOR CARDS */
    const animatedElements = document.querySelectorAll(".animate");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        },
        { threshold: 0.25 }
    );

    animatedElements.forEach(el => observer.observe(el));

    /* ADD TO CART CLICK EFFECT */
    const cartButtons = document.querySelectorAll(".menu-card button");

    cartButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.innerText = "Added ✓";
            button.classList.add("btn-success");

            setTimeout(() => {
                button.innerText = "Add to Cart";
                button.classList.remove("btn-success");
            }, 1200);
        });
    });

});
