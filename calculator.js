function calculate(num1, num2, operator) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof operator !== 'string') {
      console.log('Error: invalid parameters');
      return NaN;
    }
  
    switch (operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        return num1 / num2;
      default:
        console.log('Error: invalid operator');
        return NaN;
    }
  }
  console.log(calculate(5, 3, '-')); 
  