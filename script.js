// Progress bar
window.addEventListener("scroll", () => {
    let scroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.getElementById("progress-bar").style.width = (scroll/height)*100 + "%";
});

// Fade animation
const observer = new IntersectionObserver(entries=>{
    entries.forEach(e=>{
        if(e.isIntersecting){
            e.target.style.opacity = 1;
            e.target.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".fade-in").forEach(el=>observer.observe(el));
