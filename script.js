let openFaq = document.querySelector('.faq')
let openR = document.getElementById('resultFaq')
let resultadoFaqTwo = document.querySelector('#resultFaq-two')
let resultFaqThree = document.querySelector('#resultFaq-three')
let resultadoFaqFour = document.querySelector('#resultFaq-four')

openFaq.addEventListener('click', function() {
    if (openR.style.display == 'block') {
        openR.style.display = 'none';
    } else {
        openR.style.display = 'block';
    }
})

function clicou() {  
    if (resultadoFaqTwo.style.display == 'block') {
        resultadoFaqTwo.style.display = 'none';
    } else {
        resultadoFaqTwo.style.display = 'block'
    }
}

function clicouThree() {
    if (resultFaqThree.style.display == 'block') {
        resultFaqThree.style.display = 'none'
    } else {
        resultFaqThree.style.display = 'block'
    } 
}

function clicouFour() {
    if (resultadoFaqFour.style.display == 'block') {
        resultadoFaqFour.style.display = 'none'
    } else {
        resultadoFaqFour.style.display = 'block'
    }
}