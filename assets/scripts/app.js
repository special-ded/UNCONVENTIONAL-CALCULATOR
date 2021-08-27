let currentResult = 0;

function getUserNumberInput(){
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult,calcDescription );
}



function calculate(operation){
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator ;
  if(operation === 'ADD'){
    currentResult += enteredNumber;
    operator = '+';
  } else if(operation === 'SUBTRACT'){
    currentResult -= enteredNumber;
    operator = '-';
  }else if(operation === 'MULTIPLY'){
    currentResult *= enteredNumber;
    operator = '*';
  }else{
    currentResult /= enteredNumber;
    operator = '/';
  }
  createAndWriteOutput(operator, initialResult, enteredNumber)
  writeToLog
}

addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));