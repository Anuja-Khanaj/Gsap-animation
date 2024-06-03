// // Target the box element
// const box = document.getElementById('box');

// // Define the hover animation
// const hoverAnimation = gsap.to(box, {
//   scale: 1.2, // Scale up to 1.2
//   duration: 0.3, // Animation duration
//   paused: true, // Animation initially paused
//   ease: "power1.inOut" // Easing function
// });

// // Add event listeners for mouseenter and mouseleave
// box.addEventListener('mouseenter', () => {
//   hoverAnimation.play(); // Play the animation on mouseenter
// });

// box.addEventListener('mouseleave', () => {
//   hoverAnimation.reverse(); // Reverse the animation on mouseleave
// });

// Target the card element
const card = document.getElementById('card');

// Define the hover animation
const hoverAnimation = gsap.to(card, {
  scale: 1.05, // Scale up to 1.05
  duration: 0.3, // Animation duration
  paused: true, // Animation initially paused
  ease: "power1.inOut" // Easing function
});

// Add event listeners for mouseenter and mouseleave
card.addEventListener('mouseenter', () => {
  hoverAnimation.play(); // Play the animation on mouseenter
});

card.addEventListener('mouseleave', () => {
  hoverAnimation.reverse(); // Reverse the animation on mouseleave
});
