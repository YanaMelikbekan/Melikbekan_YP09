export function accordion() {
    const allText = document.querySelectorAll('.panel-collapse')
    const allContent = document.querySelectorAll('.panel-group');

    allContent.forEach((elem) => {
        elem.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target.closest('.panel-heading')) {
                allText.forEach((e) => {
                    e.style.display = 'none';
                })
                let block = e.target.closest('.panel');
                let text = block.querySelector('.panel-collapse');
                text.style.display = 'block';
            }
        })
    })
}