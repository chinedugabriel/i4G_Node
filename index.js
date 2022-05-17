// This is just a simple function for simple calculations in nodeJs

// Please note the following 
//To make calculations, kindly indicate the operator of your choice in a string format...

// for example..
// "+" or "add"
// "-" or "subtract"
// "/" or "divid"
// "*" or "multiply"
// "%" or "modulos"

function calculate(firstValue,operator,secondValue){
  // + - / * %
  if(operator == "+" || operator == "add"){
    return firstValue + secondValue;
  }else if(operator == "-" || operator == "subtract"){
    return firstValue - secondValue;
  }else if(operator == "*" || operator == "multiply"){
    return firstValue * secondValue;
  }else if(operator == "/" || operator == "divid"){
    return firstValue / secondValue;
  }else if(operator == "%" || operator == "modulos"){
    return firstValue % secondValue;
  }
}


// Down here you can change the parameters and to any operator to the specified format listed above...

console.log(calculate(2,"-",5));