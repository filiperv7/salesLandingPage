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


// ================ Content ================ //

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


// ================ Modules ================ //

document.querySelector('.modulesContainer').addEventListener('click', (event) => {
    const module = event.target

    if (module.classList.contains('module') || module.closest('div.module')){
        module.closest('div.module').children[0].classList.toggle('shadow')
        
        module.closest('div.module').children[1].classList.toggle('hidden')
    }  
})


// ================ Questions ================ //

document.querySelector('.questionsContainer').addEventListener('click', (event) => {
    const question = event.target

    const questionscontainer = document.querySelectorAll('.questionContainer')

    questionscontainer.forEach(question => {
        if (!question.classList.contains('.hideResponse')) {
                question.classList.add('hideResponse')
        }
    })
    
    if (question.classList.contains('question') || question.closest('div.question')) {
        question.closest('div.question').closest('div.questionContainer').classList.remove('hideResponse')
    }
})


// ================ PopUp Register ================ //

document.querySelector('.buttonRegister').addEventListener('click', () => {
    document.querySelector('#popUpContainer').classList.remove('hidden')
    document.querySelector('#popUpContainer').classList.add('show')
})

document.querySelector('#popUpContainer').addEventListener('click', (event) => {
    if (event.target.classList.contains('show')) {
        document.querySelector('#popUpContainer').classList.add('hidden')
        document.querySelector('#popUpContainer').classList.remove('show')
    }
})

document.querySelector('.x').addEventListener('click', () => {
    document.querySelector('#popUpContainer').classList.add('hidden')
    document.querySelector('#popUpContainer').classList.remove('show')
})


// ================ Button Top ================ //

document.querySelector('.top').addEventListener('click', () => {
    window.scroll(0, 0)
})


// ================ Button Top ================ //

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('.navContainer').classList.toggle('nav')
    document.querySelector('.navContainer').classList.toggle('viewPhone')

    document.querySelector('.menu').classList.toggle('x')
})