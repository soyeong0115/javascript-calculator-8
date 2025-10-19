class Calculator {
    static sum(input, delimiter) {
        const regex = new RegExp(`[${delimiter.join('')}]`);
        const numbers = input.split(regex).map(Number);

        return numbers.reduce((acc, curr) => acc + curr, 0);
    }
}

export default Calculator;