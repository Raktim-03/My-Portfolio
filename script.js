//scroll function
function scrollToText(a,b){
    window.scrollTo(a,b)
}
//<-------------------------->//





//circular progress
let circularProgress1 = document.querySelector('.html-progress-bar'),
    progressValue1 = document.querySelector('.html-progress-value');

let progressStartValue1 = 0;
let progressEndValue1 = 80,
    speed1 = 30;

let progress1 = setInterval(() => {
    progressStartValue1++;

    progressValue1.textContent = `${progressStartValue1}%`;
    circularProgress1.style.background = `conic-gradient(#f99f51 ${progressStartValue1 * 3.6}deg, #6c62fe5c ${progressStartValue1 * 3.6}deg)`;

    if (progressStartValue1 == progressEndValue1) {
        clearInterval(progress1);
    }
}, speed1);



let circularProgress2 = document.querySelector('.js-progress-bar'),
    progressValue2 = document.querySelector('.js-progress-value');

let progressStartValue2 = 0;
let progressEndValue2 = 60,
    speed2 = 40;

let progress2 = setInterval(() => {
    progressStartValue2++;

    progressValue2.textContent = `${progressStartValue2}%`;
    circularProgress2.style.background = `conic-gradient(#f99f51 ${progressStartValue2 * 3.6}deg, #6c62fe5c ${progressStartValue2 * 3.6}deg)`;

    if (progressStartValue2 == progressEndValue2) {
        clearInterval(progress2);
    }
}, speed2);


let circularProgress3 = document.querySelector('.react-progress-bar'),
    progressValue3 = document.querySelector('.react-progress-value');

let progressStartValue3 = 0;
let progressEndValue3 = 40,
    speed3 = 58;

let progress3 = setInterval(() => {
    progressStartValue3++;

    progressValue3.textContent = `${progressStartValue3}%`;
    circularProgress3.style.background = `conic-gradient(#f99f51 ${progressStartValue2 * 3.6}deg, #6c62fe5c ${progressStartValue3 * 3.6}deg)`;

    if (progressStartValue3 == progressEndValue3) {
        clearInterval(progress3);
    }
}, speed3);

let circularProgress4 = document.querySelector('.cpp-progress-bar'),
    progressValue4 = document.querySelector('.cpp-progress-value');

let progressStartValue4 = 0;
let progressEndValue4 = 60,
    speed4 = 40;

let progress4 = setInterval(() => {
    progressStartValue4++;

    progressValue4.textContent = `${progressStartValue4}%`;
    circularProgress4.style.background = `conic-gradient(#f99f51 ${progressStartValue4 * 3.6}deg, #6c62fe5c ${progressStartValue4 * 3.6}deg)`;

    if (progressStartValue4 == progressEndValue4) {
        clearInterval(progress4);
    }
}, speed4);


let circularProgress5 = document.querySelector('.python-progress-bar'),
    progressValue5 = document.querySelector('.python-progress-value');

let progressStartValue5 = 0;
let progressEndValue5 = 70,
    speed5 = 40;

let progress5 = setInterval(() => {
    progressStartValue5++;

    progressValue5.textContent = `${progressStartValue5}%`;
    circularProgress5.style.background = `conic-gradient(#f99f51 ${progressStartValue5 * 3.6}deg, #6c62fe5c ${progressStartValue5 * 3.6}deg)`;

    if (progressStartValue5 == progressEndValue4) {
        clearInterval(progress5);
    }
}, speed5)

//<------------------------------------------->//


