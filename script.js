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