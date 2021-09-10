const currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
const buttons = document.querySelectorAll('button');
const eraseBtn = document.getElementById('erase-screen');
const clearBtn = document.getElementById('clear-screen');
const evaluateOperations = document.getElementById('evaluate');

let realTimeScreenInput = [];

//clean the screen where the numbers will be displayed

clearBtn.addEventListener('click', () => {
    realTimeScreenInput = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput';
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
});

//acces to the value of every button and display'em on the screen
buttons.forEach((btn) => {

    btn.addEventListener('click', () => {

        //make sure the clicked button is not the erase button
        if (!btn.id.match('erase-screen')) {

            //show the values on the screen of the clicked btn
            realTimeScreenInput.push(btn.value)
            currentInput.innerHTML = realTimeScreenInput.join('');

            //evaluate entries in real time
            if (btn.classList.contains('number-btn')) {
                answerScreen.innerHTML = eval(realTimeScreenInput.join(''));
            }


        }

        //erase btn being clicked
        if (btn.id.match('erase-screen')) {
            realTimeScreenInput.pop();
            currentInput.innerHTML = realTimeScreenInput.join('');
            answerScreen.innerHTML = eval(realTimeScreenInput.join(''));
        }

        //evaluate button being clicked
        if (btn.id.match(evaluateOperations)) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }

        //handle the undefined error in screen
        if (typeof eval(realTimeScreenInput.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        }
    })
})

