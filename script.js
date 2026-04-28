// Scroll progress
window.addEventListener("scroll", () => {
    let scroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.getElementById("progress-bar").style.width = (scroll/height)*100 + "%";
});

// Reveal animation
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("active");
        }
    });
});

document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

// Mobile menu
document.querySelector(".hamburger").addEventListener("click", ()=>{
    document.querySelector(".nav-links").classList.toggle("active");
});
