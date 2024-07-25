function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
const texts = ["Web developer","Graphic designer"];
let currentTextIndex = 0;
let typingEffect = document.querySelector("[data-typing-effect]")
function updateText() {
  typingEffect.style.animation = 'none';
  void typingEffect.offsetWidth;
  typingEffect.style.animation = null;
  typingEffect.textContent = texts[currentTextIndex];
  currentTextIndex = (currentTextIndex + 1) % texts.length;
}
document.addEventListener("DOMContentLoaded", () => {
  typingEffect.textContent = texts[0];
  currentTextIndex++;
  setInterval(updateText,4800);
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting){
      entry.target.classList.add('show');
    }else{
      entry.target.classList.remove('show');
    }
  })
})

const hiddenElement = document.querySelectorAll('.hidden');
hiddenElement.forEach((el) => observer.observe(el));


const articles = document.getElementsByTagName('article');
Array.from(articles).forEach((article,index) => {
  article.style.transitionDelay = `${index * 0.2}s`;
  setTimeout(() => {
    article.classList.add('show');
  },100);
});

// const texts = ["Web developer","Graphics designer"];
// let currentTextIndex = 0;
// let typingEffect = document.querySelector("[data-typing-effect]");
// let isAnimating = false;

// function updateText() {
//   if (!isAnimating) {
//     typingEffect.style.animation = 'none';
//     void typingEffect.offsetWidth;
//     typingEffect.style.animation = 'unset';
//     typingEffect.textContent = texts[currentTextIndex];
//     isAnimating = true;

//     setTimeout(() => {
//       currentTextIndex = (currentTextIndex + 1) % texts.length;
//       isAnimating = false;
//     }, 1000); // Adjust the delay as needed for the animation duration
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   typingEffect.textContent = texts[0];
//   setInterval(updateText, 5000);
// });



// const texts = ["Welcome to IP Tech!", "Thank you for visiting!"];
// let currentTextIndex = 0;
// let charIndex = 0;
// let typingEffect = document.querySelector("[data-typing-effect]")

// function type() {
//   if (charIndex < texts[currentTextIndex].length) {
//     typingEffect.textContent += texts[currentTextIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, 150); // Adjust the typing speed here
//   } else {
//     setTimeout(erase, 2000); // Pause before starting to erase the text
//   }
// }

// function erase() {
//   if (charIndex > 0) {
//     typingEffect.textContent = typingEffect.textContent.slice(0, -1);
//     charIndex--;
//     setTimeout(erase, 100); // Adjust the erasing speed here
//   } else {
//     currentTextIndex = (currentTextIndex + 1) % texts.length;
//     setTimeout(type, 500); // Pause before starting to type the next text
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   type();
// });