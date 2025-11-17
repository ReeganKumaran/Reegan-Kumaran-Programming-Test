class Calculator {
  constructor(a, b, operation) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.operation = operation.toLowerCase();
  }
  calculate(a, b, operation) {
    if (operation == "add") {
      return a + b;
    } else if (operation == "sub") {
      return a - b;
    } else if (operation == "mul") {
      return a * b;
    } else if (operation == "div") {
      if (b == 0) {
        return "Division by zero error";
      } else {
        return a / b;
      }
    } else {
      return "Invalid operation";
    }
  }
}
const calc = new Calculator(10, 5, "add");
console.log(calc.calculate(calc.a, calc.b, calc.operation)); // 15
