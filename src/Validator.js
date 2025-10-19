class Validator {
    static validate(input) {
        // 문자열 맨 앞이 // ? → 커스텀 분기로 보내기
        if (input.startsWith('//')) {
            return this.handleCustomDelimiter(input);
        }

        const defaultDelimiter = [',', ':']; // 기본 구분자
        this.validateDefaultFormat(input, defaultDelimiter);

        return { input, defaultDelimiter };
    }

    // 커스텀 분기 (커스텀 구분자 오류 확인)
    static handleCustomDelimiter(input) {
        const customDelimiterPattern = /^\/\/([^0-9])\n/;
        const match = input.match(customDelimiterPattern);

        if (!match) {
            // 에러 : 커스텀 구분자 오류 (잘못된 커스텀 구분자 정의)
        }

        const customDelimiter = match[1]; // 커스텀 구분자
        const inputWithoutCustomDelimiter = input.slice(match[0].length);

        this.validateDefaultFormat(inputWithoutCustomDelimiter, customDelimiter);
        
        return { inputWithoutCustomDelimiter, customDelimiter };
    }

    static validateDefaultFormat(input, delimiter) {
        if (!/^\d/.test(input) || !/\d$/.test(input)) {
            // 에러 : 잘못된 입력 형식 오류
        }

        const invalidChar = new RegExp(`[^0-9${delimiter.join('')}]`);
        
        if (invalidChar.test(input)) {
            // 에러 : 조합 오류
        }

        // 구분자 반복 검사
        this.validateRepeatedDelimiter(input, delimiter);
    }

    // 구분자의 반복 오류
    static validateRepeatedDelimiter(input, delimiter) {
        const part = input.split(delimiter);
        if (part.some(num => num === '')) {
            // 에러 : 구분자 반복 오류
        }
    }

}

export default Validator;