export function modalWindowTwo() {
    const button = document.querySelectorAll('.discount-btn ');
    const windowBlock = document.querySelector('.popup-discount')
    button.forEach(e=>{
        e.addEventListener('click', () => {
            windowBlock.style.display = 'block'
        })
    })
    windowBlock.addEventListener('click', (e) => {
        e.preventDefault()
        if((e.target.classList.contains('popup-close'))||(e.target.classList.contains('popup-call'))){
            windowBlock.style.display='none'
        }
    })
}
