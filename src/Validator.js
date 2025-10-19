class Validator {
    static validate(input) {
        if (input.startsWith('//')) {
            return this.handleCustomDelimiter(input);
        }

        const defaultDelimiter = [',', ':']; // 기본 구분자
        
        this.validateDefaultFormat(input, defaultDelimiter);

        return { testInput: input, testDelimiter: defaultDelimiter };
    }

    // 커스텀 구분자 오류
    static handleCustomDelimiter(input) {
        const customDelimiterPattern = /^\/\/([^0-9])\\n/;
        const match = input.match(customDelimiterPattern);

        if (!match) {
            throw new Error('[ERROR] 커스텀 구분자 정의가 잘못되었습니다.')
        }

        const customDelimiter = [match[1]]; // 커스텀 구분자
        const inputWithoutCustomDelimiter = input.slice(match[0].length);

        this.validateDefaultFormat(inputWithoutCustomDelimiter, customDelimiter);
        
        return { testInput: inputWithoutCustomDelimiter, testDelimiter: customDelimiter };
    }

    // 문자열 형식 오류
    static validateDefaultFormat(input, delimiter) {
        if (!/^\d/.test(input) || !/\d$/.test(input)) {
            throw new Error('[ERROR] 문자열 입력 형식이 잘못되었습니다.')
        }

        const invalidChar = new RegExp(`[^0-9${delimiter.join('')}]`);

        if (invalidChar.test(input)) {
            throw new Error('[ERROR] 구분자, 양수 이외의 문자가 사용되었습니다.')
        }

        this.validateRepeatedDelimiter(input, delimiter);
    }

    // 구분자의 반복 오류
    static validateRepeatedDelimiter(input, delimiter) {
        const regex = new RegExp(`[${delimiter.join('')}]`);
        const parts = input.split(regex);

        if (parts.some(part => part === '')) {
            throw new Error('[ERROR] 구분자는 반복해서 사용할 수 없습니다.')
        }
    }

}

export default Validator;