window.addEventListener('scroll', () => {
    const navbarContainer = document.querySelector('.navbar');
    this.scrollY >= 30 ? navbarContainer.classList.add('active') : navbarContainer.classList.remove('active');
})