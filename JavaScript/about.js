/* ================= JOURNEY SECTION ================= */
const journeySection = document.querySelector(".animate-section");

const showJourney = () => {
    const sectionTop = journeySection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 150) {
        journeySection.classList.add("journey-show");
    }
};

window.addEventListener("scroll", showJourney);


/* ================= COUNTER SECTION ================= */
const counters = document.querySelectorAll(".counter");
let counterStarted = false;

const startCounters = () => {
    if (counterStarted) return;
    counterStarted = true;

    counters.forEach(counter => {
        const target = +counter.dataset.target;
        let count = 0;
        const speed = target / 200;

        const updateCount = () => {
            if (count < target) {
                count += speed;
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target + "+";
            }
        };

        updateCount();
    });
};

const counterSection = document.querySelector(".counter-section");

const counterObserver = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
        startCounters();
        counterObserver.disconnect();
    }
}, { threshold: 0.5 });

counterObserver.observe(counterSection);


/* ================= VALUES POP ANIMATION ================= */
const valueCards = document.querySelectorAll(".value-card");

const valueObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("value-show");
            valueObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

valueCards.forEach(card => valueObserver.observe(card));


/* ================= AWARDS POP ANIMATION ================= */
const awardCards = document.querySelectorAll(".award-card");

const awardObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("award-show");
            awardObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

awardCards.forEach(card => awardObserver.observe(card));
