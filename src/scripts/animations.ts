function initAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible')
                    observer.unobserve(entry.target)
                }
            })
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el))

    document.querySelectorAll('[data-animate-stagger]').forEach((parent) => {
        const children = parent.querySelectorAll('[data-animate]')
        children.forEach((child, i) => {
            ; (child as HTMLElement).style.setProperty('--stagger', String(i))
        })
    })

    const navbar = document.querySelector('[data-navbar]')
    if (navbar) {
        const onScroll = () => {
            navbar.classList.toggle('scrolled', window.scrollY > 10)
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        onScroll()
    }
}

document.addEventListener('DOMContentLoaded', initAnimations)
document.addEventListener('astro:page-load', initAnimations)
