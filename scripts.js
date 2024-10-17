// Apply swipe animation when page loads to the main content
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".main-content").classList.add("content-swipe-enter");
});

// Function to handle swipe-out animation before navigating
function handleNavigation(event) {
    event.preventDefault();
    const targetUrl = event.currentTarget.href;
    const mainContent = document.querySelector(".main-content");
    
    mainContent.classList.add("content-swipe-exit");

    // Wait for the animation to complete, then navigate
    setTimeout(() => {
        window.location.href = targetUrl;
    }, 500); // Match this to the duration of the animation (0.5s)
}

// Attach the handler to all navigation links and buttons
document.querySelectorAll("nav a, .learn-more-btn, .follow-btn").forEach(link => {
    link.addEventListener("click", handleNavigation);
});