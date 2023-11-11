# JavaScript Multiplication Table Generator

This is a simple JavaScript program that generates a multiplication table for a given number up to 20.

## How to Use

1. Run the JavaScript code in a web browser.
2. You will be prompted to enter a number.
3. The program will then display a multiplication table for the entered number up to 20.

## Example

If you enter the number 5, the program will display:

- 5 \* 1 = 5
- 5 \* 2 = 10
- 5 \* 3 = 15 ...
- 5 \* 20 = 100

## How it works

1. The prompt function is used to ask the user to enter a number. The message "Hello, I'm The Calculation Robot\nEnter a number you want to calculate:" is displayed to the user. The entered number is stored in the number constant.

```javascript
const number = prompt(
  "Hello, I'm The Calculation Robot\nEnter a number you want to calculate:"
);
```

2. An empty string result is initialized to store the multiplication table.

```javascript
let result = "";
```

3. A for loop is used to iterate from 1 to 20. In each iteration, the current number (factor) is multiplied with the user-entered number (number), and the result is appended to the result string along with the current multiplication operation.

```javascript
for (let factor = 1; factor <= 20; factor++) {
  result += " -> " + number + " * " + factor + " = " + number * factor + "\n";
}
```

4. Finally, an alert is used to display the multiplication table. The message includes the user-entered number and the calculated results.

```javascript
alert("The result of multiplying the number " + number + "\n\n" + result);
```

In summary, this code is a simple way to generate a multiplication table for a given number in JavaScript. It uses a for loop to iterate over a range of numbers, performs multiplication in each iteration, and stores the results in a string that is then displayed to the user

# Usage

Clone the repository to your local machine.

git clone https://github.com/usuariodaniel/JavaScript-Multiplication-Table-Generator.git

Open the `robot.html` file in your web browser.
Follow the prompt to enter a number.

---

## Contributing

Contributions to this project are welcome. If you would like to contribute, please follow these steps:

1. Fork this repository.
2. Create a branch with a descriptive name for your change.
3. Make your changes to the created branch.
4. Submit a pull request to the master branch of this repository.

---

## Contact

If you have any questions or suggestions, please contact me via my email or my GitHub profile.

---

## Thanks

This project was made possible thanks to the support and guidance of OneBitCode

---

## References

This project was inspired by a OneBitCode challenge
