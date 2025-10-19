class Calculator {
    static sum(input, delimiter) {
        const regex = new RegExp(`[${delimiter.join('')}]`);

        // 구분자를 기준으로 숫자를 분리
        const numbers = input.split(regex).map(Number);

    }
}

export default Calculator;