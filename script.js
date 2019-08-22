
var start_number = document.querySelector('#start_number');
var end_number = document.querySelector('#end_number');
var int_number = document.querySelector('#int_number');
var res = document.querySelector('#res');



function countNumber() {



    var start = Number(start_number.value);
    var end = Number(end_number.value);
    var interval = Number(int_number.value);

    if (end == 0) {
        alert('Please digit a end number greater than zero');

    } else if (end <= start) {

        res.innerHTML = '';

        for (var i = start; i >= end; i -= interval) {
            res.innerHTML += '<p>' + i + '</p>';
        }

    }else {

        res.innerHTML = '';

        for (var i = start; i <= end; i+=interval) {
                res.innerHTML += '<p>' + i + '</p>';
                }
    }






}


function multiply() {
    var number = document.querySelector('#multiply_number').value;
    var txt_table = document.querySelector('#txt_table');

    
    if (number > 0) {
        txt_table.innerHTML = '';
        for (var i = 0; i <= 10; i++) {

            txt_table.innerHTML += '<p>'+ i +'x'+number+'='+(i*number)+'</p>';
          
        }

    } 

}

