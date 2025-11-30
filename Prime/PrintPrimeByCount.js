const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) if (num % i == 0) return false;
  return true;
};

const printPrimeByCount = (count) => {
  if (typeof count !== "number" || count < 1)
    throw new Error("Please Enter the Number in digit");
  const temp = [];
  let currentNumber = 2;
  while (temp.length < count) {
    if (isPrime(currentNumber)) temp.push(currentNumber);
    currentNumber++;
  }
  return temp
};

console.log(printPrimeByCount(5))