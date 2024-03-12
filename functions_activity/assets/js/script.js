function math(operator) { //Function Declaration
    let FirstNumber = document.getElementById("num-first-number").value;
    let SecondNumber = document.getElementById("num-second-number").value;
    var result;

    if (operator == '+')
         result = parseInt(FirstNumber) + parseInt(SecondNumber);
    else if (operator == '-')
        result = parseInt(FirstNumber) - parseInt(SecondNumber);
    else if (operator == '*')
        result = parseInt(FirstNumber) * parseInt(SecondNumber);
     else if (operator == '/')
        result = parseInt(FirstNumber) / parseInt(SecondNumber);

        document.getElementById("num-total").value = result;
}