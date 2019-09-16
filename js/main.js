var currentState = 0;
var states = ['0', '1', '2', '3', '4', '5'];
var sym = ["!", "@", "#", "$", "%", "&", "&"];

var bigText = document.querySelector('.desc');
var smallText = document.querySelector('.ex');

var nextBtn = document.querySelector('.next');
var restartBtn = document.querySelector('.back');
nextBtn.addEventListener('click', changeState);
restartBtn.addEventListener('click', resetState);

/* functions for changing state */

function resetState() {
    currentState = 0;
    renderState();
}

function changeState() {
    currentState++;
    renderState();
}

console.log(states[currentState]);
/*  render the pages/states */

function renderState() {

    switch (states[currentState]) {

        case '0': 
            bigText.textContent = "I can read your mind";
            smallText.textContent = "Press next to continue";
            restartBtn.style.visibility = 'hidden';
            break;

        case '1': 
            bigText.textContent = "Pick a number between 1-99";
            smallText.textContent = "When you have picked your number, click next";
            break;

        case '2':
            bigText.textContent = "Add both digits together to get a new number";
            smallText.textContent = "Ex: 14 is 1 + 4 = 5";
            break;

        case '3':
            bigText.textContent = "Subtract your new number from the original number";
            smallText.textContent = "Ex: 14 - 5 = 9";
            break;
        
        case '4':
            bigText.innerHTML = " ";
            for (var i = 0 ;i < 100; i++) {
                if (i % 9 == 0) {
                    bigText.innerHTML += i + " = & " + "<br>";
                }
                else  {
                    var char = String.fromCharCode(Math.floor(Math.random() * 10) + 36);
                    bigText.innerHTML += i + " = " + char + "<br>";
            }
        }
            nextBtn.style.visibility = "visible";
            smallText.innerHTML = "Find your new number";
            break;
        case '5':
            var rand = sym[Math.floor(Math.random() * sym.length)];
            bigText.innerHTML = rand;
            smallText.innerHTML = "Your symbol is: ..." ;
            nextBtn.style.visibility = "hidden";
        break;

    }
}
