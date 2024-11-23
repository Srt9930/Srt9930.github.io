let scrolledToAbout = false; // Flag to prevent repeated scrolling
let isNavButtonClick = false; // Flag to check if the scroll was triggered by a nav button or menu link click
let isMenuClick = false; // Flag to differentiate menu click from manual scroll

// Scroll event listener for automatic scrolling when reaching 30% of the profile section
window.addEventListener('scroll', function() {
    // If the scroll was triggered by a nav button or menu click, don't auto-scroll
    if (isNavButtonClick || isMenuClick) return;

    const profile = document.getElementById('profile');
    const about = document.getElementById('about');

    if (!profile || !about) return; // Ensure sections exist

    // Get the scroll trigger point (30% of profile's height)
    const scrollTrigger = profile.offsetTop + (profile.offsetHeight * 0.3);

    // Check if the user scrolled past the trigger point
    if (window.scrollY >= scrollTrigger && !scrolledToAbout) {
        scrolledToAbout = true; // Prevent repeated execution
        about.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Reset flag if user scrolls back up
    if (window.scrollY < profile.offsetTop) {
        scrolledToAbout = false;
    }
});

// Event listener for desktop and mobile navigation links
const navLinks = document.querySelectorAll('.nav-links a, .menu-links a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Prevent default anchor click behavior to ensure smooth scrolling
        e.preventDefault();

        // Set flag to true when a navigation link is clicked
        isNavButtonClick = true;

        // Reset scrolledToAbout flag to prevent auto scroll behavior
        scrolledToAbout = true;

        // Get the target section
        const targetId = this.getAttribute('href').substring(1); // Get the target section ID (e.g., 'about')
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

            // Reset the isNavButtonClick flag after the scroll completes
            setTimeout(() => {
                isNavButtonClick = false; // Reset flag after scroll completes
                // If the user navigated to the About section, set scrolledToAbout to true
                if (targetId === "about") {
                    scrolledToAbout = true;
                }
            }, 500); // Timeout duration should match scroll duration
        }
    });
});

// Mobile-specific functionality for hamburger menu
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function handleMenuClick(event) {
    // Prevent smooth scrolling for menu links by setting the flag
    isMenuClick = true;
    toggleMenu(); // Close the menu after clicking a link
}

// Scroll event listener for mobile and desktop
window.addEventListener('scroll', function () {
    const profile = document.getElementById('profile');
    const about = document.getElementById('about');

    if (!profile || !about) return; // Ensure sections exist

    // Get the scroll trigger point (30% of profile's height)
    const scrollTrigger = profile.offsetTop + (profile.offsetHeight * 0.3);

    // Check if the user scrolled past the trigger point
    if (window.scrollY >= scrollTrigger && !isMenuClick && !scrolledToAbout) {
        about.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Reset flag if user scrolls manually and goes back up
    if (window.scrollY < profile.offsetTop) {
        isMenuClick = false;
    }
});

//-----------------------------------------------------------------------------------

//down arrow work
const downArrow = document.getElementById('down-arrow');
const aboutSection = document.getElementById('about');

downArrow.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
});

let scrolledToContact = false; // Flag to prevent repeated scrolling

window.addEventListener('scroll', function() {
    const projects = document.getElementById('projects');
    const contact = document.getElementById('contact');

    if (!projects || !contact) return; // Ensure sections exist

    // Get the scroll trigger point (30% of projects's height)
    const scrollTrigger = projects.offsetTop + (projects.offsetHeight * 0.3);

    // Check if the user scrolled past the trigger point
    if (window.scrollY >= scrollTrigger && !scrolledToContact) {
      scrolledToContact = true; // Prevent repeated execution
      contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Reset flag if user scrolls back up
    if (window.scrollY < projects.offsetTop) {
      scrolledToContact = false;
    }
});
