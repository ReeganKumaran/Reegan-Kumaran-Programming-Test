const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) if (num % i == 0) return false;
  return true;
};

const printPrimeByRange = (start, end) => {
  const temp = [];
  for (let i = start; i <= end; i++) if (isPrime(i)) temp.push(i);
  return temp
};

console.log(printPrimeByRange(0, 100))