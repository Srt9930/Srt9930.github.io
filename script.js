function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");s
  icon.classList.toggle("open");
}


//For moving stars

// const starsContainer = document.querySelector('.stars');
// const totalStars = 100; // Number of stars

// for (let i = 0; i < totalStars; i++) {
//   const star = document.createElement('div');
//   star.classList.add('star');
//   star.style.top = `${Math.random() * 100}vh`;
//   star.style.left = `${Math.random() * 100}vw`;
//   star.style.setProperty('--random-delay', Math.random().toFixed(2)); // Randomize animation delay
//   star.style.animationDelay = `${Math.random() * 5}s`; // Twinkle timing
//   starsContainer.appendChild(star);
// }


// console.log(`Generating ${totalStars} stars`);

