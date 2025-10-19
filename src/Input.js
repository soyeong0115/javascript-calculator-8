import { MissionUtils } from "@woowacourse/mission-utils";

class Input {
    static async getInput() {
        const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
        MissionUtils.Console.print(`입력한 값: ${input}`); // 확인용 출력
        return input;
    }
}

export default Input;