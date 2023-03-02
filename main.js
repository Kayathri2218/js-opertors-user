let num1 = parseInt(prompt("Enter the first number : "));
        let num2 = parseInt(prompt("Enter the second number : "));
        let operator = prompt("Enter the operator (+, -, *, /, **): ");

        function plus(num1, num2) {
            return num1 + num2;
        }

        function min(num1, num2) {
            return num1 - num2;
        }

        function mul(num1, num2) {
            return num1 * num2;
        }

        function div(num1, num2) {
            return num1 / num2;
        }

        function power(num1, num2) {
            return num1 ** num2;
        }

        if (operator === "+") {
            console.log(`${plus(num1, num2)}`);
        } else if (operator === "-") {
            console.log(`${min(num1, num2)}`);
        } else if (operator === "*") {
            console.log(`${mul(num1, num2)}`);
        } else if (operator === "/") {
            console.log(`${div(num1, num2)}`);
        } else if (operator === "**") {
            console.log(`${power(num1, num2)}`);
        } else {
            console.log("Invalid operator");
        }
