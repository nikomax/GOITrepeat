var title = document.createElement('h1');
title.innerHTML = 'Тест по програмированнию';
var body = document.querySelector('body');
body.appendChild(title);

var form = document.createElement('form');
body.appendChild(form);


for (var i = 0; i < 3; i++) {
    var question = document.createElement('div');
    question.innerHTML = (i + 1) + '. Вопрос №' + (i + 1);
    form.appendChild(question);

    for (var j = 0; j < 3; j++) {
        var answerBox = document.createElement('div');
        question.appendChild(answerBox)

        var answer = document.createElement('input');
        answer.setAttribute('type', 'checkbox');

        var answerText = document.createElement('span');
        answerText.innerHTML ='Вариант ответа №' + (j + 1);
        answerBox.appendChild(answer);
        answerBox.appendChild(answerText);
    }
}



var button = document.createElement('button');
button.innerHTML = 'Проверить мои результаты';
body.appendChild(button);
button.style.border = '2px solid black';
button.style.background = '#6abab8';