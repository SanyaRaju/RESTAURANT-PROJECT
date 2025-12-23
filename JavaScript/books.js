document.addEventListener("DOMContentLoaded", () => {

    /* ================= SECTION ANIMATIONS ================= */

    const sections = document.querySelectorAll(".animate");

    const sectionObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    sectionObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.25 }
    );

    sections.forEach(section => sectionObserver.observe(section));


    /* ================= TABLE STAGGER ANIMATION ================= */

    const tableBoxes = document.querySelectorAll(".table-box");

    const tableObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    tableBoxes.forEach((table, index) => {
                        setTimeout(() => {
                            table.classList.add("show");
                        }, index * 150);
                    });
                    tableObserver.disconnect();
                }
            });
        },
        { threshold: 0.4 }
    );

    if (tableBoxes.length > 0) {
        tableObserver.observe(tableBoxes[0]);
    }

});
document.addEventListener("DOMContentLoaded", () => {

    const tables = document.querySelectorAll(".table-box");
    const guestInput = document.getElementById("guests");
    const messageBox = document.getElementById("seatMessage");

    /* ================= TABLE CLICK LOGIC ================= */

    tables.forEach(table => {

        table.addEventListener("click", () => {

            // If booked table
            if (table.classList.contains("booked")) {
                messageBox.textContent = "This seat is already booked. Please select another.";
                messageBox.style.color = "#ff4d4d";
                return;
            }

            // Remove previous selection
            tables.forEach(t => t.classList.remove("selected"));

            // Add animation pulse
            table.classList.add("pulse");
            setTimeout(() => table.classList.remove("pulse"), 400);

            // Select table
            table.classList.add("selected");

            // Update guests
            const seats = table.dataset.seats || 2;
            if (guestInput) guestInput.value = seats;

            // Show message
            messageBox.textContent = `${seats}-seater table selected. Seat available & reserved for you.`;
            messageBox.style.color = "#f5b301";
        });
    });

});
