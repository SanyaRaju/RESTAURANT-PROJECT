const animatedCards = document.querySelectorAll(
    ".animate-left, .animate-right"
);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    { threshold: 0.3 }
);

animatedCards.forEach(card => observer.observe(card));

