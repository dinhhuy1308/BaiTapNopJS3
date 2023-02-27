var numArr = [];
document.getElementById('btnSum').onclick = function () {
    var num = Number(document.getElementById('num').value);
    numArr.push(num);   
    document.getElementById('txtNotify').innerHTML = numArr;
}

/* 
    Bài tập 1: Tính tổng số dương
*/
document.getElementById('btnCalcSum').onclick = function () {
    var total = 0;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            total += numArr[i];        
        }
    }
    document.getElementById('result1').innerHTML = 'Tổng số dương: ' + total;
}


/* 
    Bài tập 2: Đếm số dương
*/
document.getElementById('btnCount').onclick = function () {
    var count = 0;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            count ++
        }
    }
    document.getElementById('result2').innerHTML = 'Số dương: ' + count;
}


/* 
    Bài tập 3: Tìm số nhỏ nhất
*/
document.getElementById('btnNumMin').onclick = function () {
    var checkNumMin = numArr[0];
    for (var i = 0; i < numArr.length; i++) {
        if (checkNumMin > numArr[i]) {
            checkNumMin = numArr[i];
        }
    }
    document.getElementById('result3').innerHTML = 'Số nhỏ nhất: ' + checkNumMin;
}


/* 
    Bài tập 4: Tìm số dương nhỏ nhất
*/
document.getElementById('btnPositiveNumMin').onclick = function () {
    var positiveNum = [];
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            positiveNum.push(numArr[i]);
        }
    }

    if (positiveNum.length == 0) {
        positiveNum.push('Không có số dương trong mảng');

    } 

    var checkNumMin = positiveNum[0];
    for (var i = 0; i < positiveNum.length; i++) {
        if (checkNumMin > positiveNum[i]) {
            checkNumMin = positiveNum[i];
        }}
    document.getElementById('result4').innerHTML = checkNumMin;
}



/*
    Bài tập 5: Tìm số chẵn cuối cùng:
*/
document.getElementById('btnEvenNum').onclick = function () {
    var evenNumArr = 0;
    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] % 2 == 0) {
            evenNumArr = numArr[i];
        }
    }
    document.getElementById('result5').innerHTML = 'Số chẵn cuối cùng: ' + evenNumArr;
}



/*
    Bài tập 6: Đổi chỗ:
*/
document.getElementById('btnChangePlace').onclick = function () {
    var numPosition1 = document.getElementById('numPosition1').value;
    var numPosition2 = document.getElementById('numPosition2').value;

    var temporary = numArr[numPosition1];
    numArr[numPosition1] = numArr[numPosition2];
    numArr[numPosition2] = temporary;

    document.getElementById('result6').innerHTML = 'Mảng sau khi đổi: ' + numArr;
}



/*
    Bài tập 7: Sắp xếp tăng dần
*/
document.getElementById('arrange').onclick = function () {
    var numArrCopy = [];
    for (var i = 0; i < numArr.length; i++) {
        numArrCopy.push(numArr[i]);     
    }

    numArrCopy.sort(function(a,b) {
        return a - b;
    }) 
    document.getElementById('result7').innerHTML = 'Mảng sau khi sắp xếp: ' + numArrCopy;
}



/*
    Bài tập 8: Tìm số nguyên tố đầu tiên
*/
function primeNum (n) {
    var checkPrimeNum = true;
    if (n < 2) {
        checkPrimeNum = false;
    }

    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            checkPrimeNum = false;
            break;
        }
    }
    return checkPrimeNum;
}

document.getElementById('findPrimeNum').onclick = function () {
    var prime = -1;
    for (var i = 0; i < numArr.length; i++) {
        if (primeNum(numArr[i])) {
            prime = numArr[i];
            break;
        }
    }
    document.getElementById('result8').innerHTML =  prime;
}



/*
    Bài tập 9: Đếm số nguyên
*/
var numArr2 = [];
document.getElementById('btnSum2').onclick = function () {
    var num2 = Number(document.getElementById('num2').value);
    numArr2.push(num2);
    document.getElementById('txtNotify2').innerHTML = numArr2;
}

document.getElementById('countInteger').onclick = function () {
    var countInteger = 0;
    for (var i = 0; i < numArr2.length; i++) {
        if (Number.isInteger(numArr2[i]) == true) {
            countInteger ++;
        }
    }
    document.getElementById('result9').innerHTML = 'Số nguyên: ' + countInteger;
}


/*
    Bài tập 10: So sánh số lượng số âm và dương
*/
document.getElementById('compareNum').onclick = function () {
    var countPositiveNum = 0;
    var countNegativeNumber = 0;

    for (var i = 0; i < numArr.length; i++) {
        if (numArr[i] > 0) {
            countPositiveNum++;
        } else if (numArr[i] < 0) {
            countNegativeNumber++
        }       
    }

    var result = '';
    result = compare(countNegativeNumber,countPositiveNum);

    document.getElementById('result10').innerHTML = result;
}

function compare(n1,n2) {
    if (n1 > n2) {
        result = 'Số âm > Số dương';
    } else if (n1 < n2) {
        result = 'Số dương > Số âm';
    } else {
        result = 'Số dương = Số âm';
    }
    return result;
}


