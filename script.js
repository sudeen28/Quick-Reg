// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Copy to clipboard for developer code
const copyBtn = document.querySelector('.copy-btn');
if(copyBtn){
  copyBtn.addEventListener('click', ()=>{
    const code = copyBtn.previousElementSibling.innerText;
    navigator.clipboard.writeText(code);
    copyBtn.innerText = "Copied!";
    setTimeout(()=>{ copyBtn.innerText = "Copy"; },1500);
  });
}
// Hamburger toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// Hamburger toggle
// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('nav-links');
// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });