let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let number = document.getElementById('num');

let currentNumber = 0;
chrome.storage.sync.get('num', function (data) {
   setNumber(data.num);
});

increase.onclick = function() {
    setNumber(currentNumber + 1);
};

decrease.onclick = function() {
    setNumber(currentNumber - 1);
};

function setNumber(num) {
    if (num < 0) {
        num = 0;
    }

    currentNumber = num;
    chrome.storage.sync.set({num: currentNumber});
    number.innerText = '' + currentNumber;
}