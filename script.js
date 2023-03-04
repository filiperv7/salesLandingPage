const header = document.querySelector('header')

document.addEventListener('scroll', () => {
    const position = window.pageYOffset
    
    if (position > 4) {
        header.style.top =
        header.style.borderTopLeftRadius =
        header.style.borderTopRightRadius = '0'
        
        header.style.backgroundColor = '#05112bee';
    } else {
        header.style.top =
        header.style.borderTopLeftRadius =
        header.style.borderTopRightRadius = '1rem'

        header.style.backgroundColor = '#05112b'
    }
})


const cardContainer = document.querySelector('.cards')

cardContainer.addEventListener('click', (event) => {
    const card = event.composedPath()[3]

    if (card.classList.contains('card')){
        card.classList.toggle('flip')
    }

    if (card.classList.contains('flipCard')) {
        var parent = card.parentNode

        parent.classList.toggle('flip')
    }
})