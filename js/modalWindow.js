export function modalWindow() {
    const link = document.querySelector('.call-btn');
    const windowBlock = document.querySelector('.popup-call')
    link.addEventListener('click', () => {
        windowBlock.style.display = 'block'
    })
    windowBlock.addEventListener('click', (e) => {
        e.preventDefault()
        if(e.target.classList.contains('popup-close')){
            windowBlock.style.display='none'
        }
    })
}

