const btnQuestions = document.querySelector('.btn-faq');

const aswerElement = document.querySelector('.aswer');

const iconQuestions = document.querySelector('.icon');

//ToDo Efeito mostrar resposta;

btnQuestions.addEventListener('click', () => {

    if (aswerElement.classList.contains('closed')) {
        iconQuestions.innerHTML = 'x';
        aswerElement.classList.remove('closed');
    } else {
        iconQuestions.innerHTML = '+';
        aswerElement.classList.add('closed');
    }

});

console.log(aswerElement);