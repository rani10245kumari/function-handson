var hello = document.getElementById("helo");
function heelo() {
    hello.textContent = "Hello World";
}

var change = document.getElementById("changeText")
function replace() {
    change.textContent = "Welcome to Elevation Academy"
}

//question no. six

function six() {
    document.getElementById("heading").style.color = 'red';
}

//question no. 7--------------------------------
function flex() {
    const b = document.getElementById('cont')
    if (b.style.flexDirection === 'row') {
        b.style.flexDirection = 'column';
    } else {
        b.style.flexDirection = 'row';
    }

}

//question no. 9-------------
setInterval(function () {
    var clockElement = document.getElementById("clock");
    var currentTime = new Date();
    var timeString = currentTime.toLocaleTimeString();
    clockElement.innerHTML = timeString;
}, 1000);