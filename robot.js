const number = prompt(
  "Hello, I'm The Calculation Robot\n" + "Enter a number you want to calculate:"
);
let result = "";

for (let factor = 1; factor <= 20; factor++) {
  result += " -> " + number + " * " + factor + " = " + number * factor + "\n";
}

alert("The result of multiplying the number " + number + "\n\n" + result);
