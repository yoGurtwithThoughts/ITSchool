document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".date, .title, .subtitle, .section-title,.section-title, .section-content,.section-content1, .section-content1");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); 
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element); 
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-container img");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); 
            }
        });
    });

    images.forEach(image => {
        observer.observe(image); 
    });
});