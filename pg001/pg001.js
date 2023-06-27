function checkNumberIsPrime(num) {
    if (num % 2 === 0) {
      return false;
    } else {
      return true;
    }
  }
let primeResult = checkNumberIsPrime(1);
console.log(primeResult);
