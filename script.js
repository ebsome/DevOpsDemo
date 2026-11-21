// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    menuToggle.textContent =
        navLinks.classList.contains("show") ? "✕" : "☰";
});

// Close mobile navigation after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
        menuToggle.textContent = "☰";
    });
});


// ==============================
// FOOD CATEGORY FILTER
// ==============================

const filterButtons = document.querySelectorAll(".filter-btn");
const foodCards = document.querySelectorAll(".food-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const category = button.dataset.filter;

        foodCards.forEach(card => {

            if (
                category === "All" ||
                card.dataset.category === category
            ) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});


// ==============================
// CATEGORY CARD NAVIGATION
// ==============================

document.querySelectorAll(".category-card").forEach(card => {

    card.addEventListener("click", () => {

        const category = card.dataset.category;

        filterButtons.forEach(button => {

            button.classList.remove("active");

            if (button.dataset.filter === category) {
                button.classList.add("active");
            }

        });

        foodCards.forEach(food => {

            food.classList.toggle(
                "hidden",
                food.dataset.category !== category
            );

        });

    });

});


// ==============================
// SHOPPING CART
// ==============================

let cartCount = 0;
const cartDisplay = document.getElementById("cartCount");

const addButtons = document.querySelectorAll(".add-btn");

addButtons.forEach(button => {

    button.addEventListener("click", () => {

        cartCount++;

        cartDisplay.textContent = cartCount;

        const originalText = button.textContent;

        button.textContent = "✓";

        setTimeout(() => {
            button.textContent = originalText;
        }, 600);

    });

});


// ==============================
// NEWSLETTER SUBSCRIPTION
// ==============================

const subscribeForm = document.getElementById("subscribeForm");

subscribeForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const email = document.getElementById("email").value;

    alert(
        "Thank you for subscribing!\n" +
        "Your email: " + email
    );

    subscribeForm.reset();

});