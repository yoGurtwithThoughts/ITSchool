function setActive(event) {
    
    const links = document.querySelectorAll('.navbar-nav .nav-link');

    
    links.forEach(link => {
        link.classList.remove('active');
    });

    
    event.target.classList.add('active');
}
       
        
    