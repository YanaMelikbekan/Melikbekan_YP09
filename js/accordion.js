export function accordion() {
    const titleOne = document.querySelector('#headingOne-two')
    const textOne = document.querySelector('#collapseOne-two')
    const titleTwo = document.querySelector('#headingTwo-two')
    const textTwo = document.querySelector('#collapseTwo-two')
    const titleThree = document.querySelector('#headingThree-two')
    const textThree = document.querySelector('#collapseThree-two')
    
        titleOne.addEventListener('click',()=>{
            textOne.style.display='none'
        })
        titleTwo.addEventListener('click',()=>{
            textTwo.style.display='block'
        })
        titleThree.addEventListener('click',()=>{
            textThree.style.display='block'
        })

}