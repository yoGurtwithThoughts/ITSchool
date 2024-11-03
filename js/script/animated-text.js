document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".date, .title, .subtitle, .section-title, .section-content, .section-content1");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Отключаем наблюдение после появления
            }
        });
    });

    elements.forEach(element => {
        observer.observe(element); // Наблюдаем за каждым элементом
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".image-container img");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target); // Отключаем наблюдение после появления
            }
        });
    });

    images.forEach(image => {
        observer.observe(image); // Наблюдаем только за изображениями
    });
});