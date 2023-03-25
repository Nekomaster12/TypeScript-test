function calc(num1: number, operator: string, num2: number){
    switch(operator){
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
    }
}

let result: number = calc(3,"*", 5)
console.log(result)