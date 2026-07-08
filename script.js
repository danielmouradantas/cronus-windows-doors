// Cronus Windows & Doors JavaScript
// This file contains small enhancements to improve user experience,
// such as updating the copyright year dynamically.

document.addEventListener('DOMContentLoaded', () => {
    // Update the copyright year in the footer
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});