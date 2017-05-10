/**
 * Created by Mechu on 09.05.2017.
 */

function arithmetics() {
    var first = parseInt(document.getElementById('firstNum').value);
    var second = parseInt(document.getElementById('secondNum').value);

    var arith = document.getElementById("arithmetic");
    var res;
    var op = arithmetic.options[arith.selectedIndex].text;
    switch (op) {
        case "+":
            res = first + second;
            break;
        case "-":
            res = first - second;
            break;
        case "*":
            res = first * second;
            break;
        case "/":
            res = first / second;
            break;
        default:
            var res = first + second;
    }
    document.getElementById("resultArith").value = res;
}

function refreshArith() {
    document.getElementById("calcArith").reset();
}


function doFact(n){
    return +!(+(n)) || doFact(n - 1) * n;
}

function factorial() {
    var f = document.getElementById("facNum").value;
    var res = document.getElementById("resultFac");
    res.value = "" + doFact(Math.abs(f));
}

function refreshFac() {
    document.getElementById("calcFac").reset();
}


function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}