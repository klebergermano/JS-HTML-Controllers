

/*-------------------------------------- Number Analyzer ---------------*/

var input_number = document.querySelector('#input_number');
var  select = document.querySelector('#select_numbers');

var add_number = document.querySelector('#btn_add_number');
var analyze = document.querySelector('#btn_finish_analyze');
var clear = document.querySelector('#btn_clear');


var result = document.querySelector('#result');

add_number.addEventListener('click', setNumber);
analyze.addEventListener('click', analyzeNumber);
clear.addEventListener('click', clearSelect);



function clearSelect() {
    select.innerHTML = '';
    result.innerHTML = '';


}

function analyzeNumber() {
    let averageNum = 0;
    let biggestNum = 0;
    let smallestNum = 0;
    let sumNum = 0;
    let optionsNum = select.childElementCount;
    let arrayNum= [];


    if (optionsNum < 2) {
        alert('Please insert 2 or more value');
    } else {


        for (let i = 0; i < optionsNum; i++) {

            let num = Number(select.options[i].text)
            sumNum += num;
            arrayNum.push(num);

        }
        arrayNum.sort(function (a, b) { return a - b });
        smallestNum = arrayNum[0];
        biggestNum = arrayNum[(optionsNum - 1)];
        averageNum = sumNum / optionsNum;
        result.innerHTML = '';
        resultTxt = ` ${optionsNum} numbers counted:<br/><br/>`;
        resultTxt += `The smallest number is ${smallestNum}<br/>`;
        resultTxt += `The biggest number is ${biggestNum} <br/>`;
        resultTxt += `The average number is ${averageNum} <br/>`;
        resultTxt += `The sume of the numbers is ${sumNum} <br/>`;
        result.innerHTML = resultTxt;


    }


}




function setNumber() {
    let number = input_number.value;
    let valida = validaNumber(number);
    if (valida) { addNumber(number);  } 
}



function findNumber(n1) {
   let c = select.childElementCount;
    let finded = false; 
    for (let i = 0; i < c; i++) {
     
        let num = select.options[i].text;
 
        if (n1 == num) {  finded = true;  }
    }

    if (finded) {
       
        return true;
    }

}

function addNumber(number) {
    let option = document.createElement('option');
    option.text = number;
    select.appendChild(option);
    input_number.value = '';
}

function validaNumber(num) {

    let finded = findNumber(num);

    if ( num == '') {

        alert('Please enter with a number greater than 0');
        return false;

    } else if (finded) {

        alert('This number already exist, please chose another one');
        return false;

    }

    else {
        return true;
    }


}
/*--------------------------------------Count Number---------------*/
function countNumber() {

    let start_number = document.querySelector('#start_number');
    let end_number = document.querySelector('#end_number');
    let int_number = document.querySelector('#int_number');
    let res = document.querySelector('#res');

    let start = Number(start_number.value);
    let end = Number(end_number.value);
    let interval = Number(int_number.value);

    if (interval == 0) {
        interval = 1;
    }
    if (end == 0) {
        alert('Please digit a end number greater than zero');

    } else if (end <= start) {

        res.innerHTML = '';

        for (let i = start; i >= end; i -= interval) {
            res.innerHTML += '<p>' + i + '</p>';
        }

    }else {

        res.innerHTML = '';

        for (let i = start; i <= end; i+=interval) {
                res.innerHTML += '<p>' + i + '</p>';
                }
    }






}

/*--------------------------------------Multiply---------------*/ 
function multiply() {
    let number = document.querySelector('#multiply_number').value;
    let txt_table = document.querySelector('#txt_table');

    
    if (number > 0) {
        txt_table.innerHTML = '';
        for (let i = 0; i <= 10; i++) {
            txt_table.size = '12';

            let option = document.createElement('option');


            option.innerText = `${i} x ${number} = ${i * number}`;
            txt_table.appendChild(option);

        }

    } else { alert('Please insert a number greater than 0');}

}



