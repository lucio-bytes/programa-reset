const navbar = document.querySelector('[data-navbar]') as HTMLElement
const logo = navbar?.querySelector('.navbar-logo') as HTMLElement

function updateNavbar() {
    if (!navbar) return
    const scrolled = window.scrollY > 80

    if (scrolled) {
        navbar.style.backgroundColor = 'rgba(253, 251, 247, 0.95)'
        navbar.style.backdropFilter = 'blur(12px)'
        navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)'
        if (logo) {
            logo.classList.remove('text-white')
            logo.classList.add('text-primary')
        }
    } else {
        navbar.style.backgroundColor = 'transparent'
        navbar.style.backdropFilter = 'none'
        navbar.style.boxShadow = 'none'
        if (logo) {
            logo.classList.remove('text-primary')
            logo.classList.add('text-white')
        }
    }
}

updateNavbar()
window.addEventListener('scroll', updateNavbar, { passive: true })
