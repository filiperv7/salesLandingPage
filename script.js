const header = document.querySelector('header')

document.addEventListener('scroll', () => {
    const position = window.pageYOffset
    

    if (position > 4) {
        header.style.top =
        header.style.borderTopLeftRadius =
        header.style.borderTopRightRadius = '0'
        
        header.style.backgroundColor = '#05112bed';
    } else {
        header.style.top =
        header.style.borderTopLeftRadius =
        header.style.borderTopRightRadius = '1rem'

        header.style.backgroundColor = '#05112b'
    }

})