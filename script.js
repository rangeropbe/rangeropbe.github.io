document.addEventListener("DOMContentLoaded", function() {
    
    // CTA Button Hover Effect
    const ctaButton = document.querySelector(".cta-button");
    if (ctaButton) {
        ctaButton.addEventListener("mouseover", function() {
            ctaButton.style.boxShadow = "0 0 20px #0ff";
        });

        ctaButton.addEventListener("mouseout", function() {
            ctaButton.style.boxShadow = "0 0 10px #0ff";
        });
    }

    // FAQ Section - Toggle Answers
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        item.addEventListener("click", function() {
            this.classList.toggle("active");
            const answer = this.querySelector(".answer");
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });

    // Payment Form Validation
    const paymentForm = document.querySelector("#payment-form");
    if (paymentForm) {
        paymentForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const name = document.querySelector("#name").value;
            const email = document.querySelector("#email").value;
            const amount = document.querySelector("#amount").value;

            if (name === "" || email === "" || amount === "") {
                alert("Please fill in all details before proceeding.");
            } else {
                alert("Redirecting to payment gateway...");
                window.location.href = "https://razorpay.com"; // Replace with your actual payment link
            }
        });
    }

    // Animated Scrolling
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
