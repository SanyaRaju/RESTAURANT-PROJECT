let total = 0;

// Total display
const totalAmount = document.getElementById("totalAmount");

// All add buttons
const addButtons = document.querySelectorAll(".add-item");

addButtons.forEach(button => {
    button.addEventListener("click", () => {

        const price = parseInt(button.dataset.price);
        const card = button.closest(".cake-card");

        // ===== REMOVE ITEM =====
        if (button.classList.contains("added")) {

            total -= price;
            animateTotal(totalAmount, total);

            button.classList.remove("added", "btn-success");
            button.classList.add("btn-outline-warning");
            button.textContent = "Add";

            if (card) {
                card.classList.remove("selected");
            }

            return;
        }

        // ===== ADD ITEM =====
        total += price;
        animateTotal(totalAmount, total);

        button.classList.add("added", "btn-success");
        button.classList.remove("btn-outline-warning");
        button.textContent = "Added ✔";

        if (card) {
            card.classList.add("selected");
            animateCard(card);
        }

        animateButton(button);
    });
});

// ================= ANIMATIONS =================

// Total amount smooth count
function animateTotal(element, newTotal) {
    element.classList.add("total-bounce");
    element.textContent = newTotal;

    setTimeout(() => {
        element.classList.remove("total-bounce");
    }, 400);
}

// Card glow animation
function animateCard(card) {
    card.classList.add("card-pulse");

    setTimeout(() => {
        card.classList.remove("card-pulse");
    }, 500);
}

// Button click animation
function animateButton(button) {
    button.classList.add("btn-pop");

    setTimeout(() => {
        button.classList.remove("btn-pop");
    }, 300);
}
