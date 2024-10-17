// Apply swipe animation when page loads
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("swipe-enter");
});

// Function to handle swipe-out animation before navigating
function handleNavigation(event) {
    event.preventDefault();
    const targetUrl = event.currentTarget.href;
    document.body.classList.add("swipe-exit");

    // Wait for the animation to complete, then navigate
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 500); // Match this to the duration of the animation (0.5s)
}

// Attach the handler to all navigation links
document.querySelectorAll("nav a, .learn-more-btn, .follow-btn").forEach(link => {
    link.addEventListener("click", handleNavigation);
});