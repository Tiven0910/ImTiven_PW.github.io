// rotate text js code 
let text = document.querySelector(".text p");

text.innerHTML = text.innerHTML.split("").map((char,i)=>
    `<b style="transform:rotate(${i * 6.3}deg")>${char}</b>`
).join("");


// switch between about buttons 

const buttons = document.querySelectorAll('.about-btn button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    contents.forEach(content => content.style.display = 'none');
    contents[index].style.display = 'block';
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});


// scroll reveal

ScrollReveal({ 
    distance: "90px",
    duration: 2000,
    delay: 200,
    reset: true, // Optional, allows animations to replay on scroll
});

ScrollReveal().reveal('header, nav', { origin: "top" });
ScrollReveal().reveal('.hero-info, .about-img, .blog1, .blog2, .img1, .img2', { origin: "left" });
ScrollReveal().reveal('.img-hero, .about-content2, .blog4, .blog5, .img3, .img4', { origin: "right" });
ScrollReveal().reveal('.about-content, .blog3, .contact-info', { origin: "bottom" });



// reload page
window.onload = () => {
    if (!location.hash || location.hash !== '#home') {
      location.hash = '#home';
    }
  };