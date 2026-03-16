document.querySelectorAll('.faq-trigger').forEach((btn) => {
    btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item')
        if (!item) return
        const isOpen = item.classList.contains('open')

        document.querySelectorAll('.faq-item.open').forEach((el) => {
            el.classList.remove('open')
            el.querySelector('.faq-trigger')?.setAttribute('aria-expanded', 'false')
        })

        if (!isOpen) {
            item.classList.add('open')
            btn.setAttribute('aria-expanded', 'true')
        }
    })
})
