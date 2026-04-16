// Button function
function showMessage() {
    document.getElementById("msg").innerText = "Thanks for visiting!";
}

// Scroll animation
function reveal() {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const height = window.innerHeight;

        if (top < height - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);