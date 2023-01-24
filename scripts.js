window.addEventListener('scroll', () => {
    const navbarContainer = document.querySelector('.navbar');
    this.scrollY >= 60 ? navbarContainer.classList.add('active') : navbarContainer.classList.remove('active');
})