import { MissionUtils } from "@woowacourse/mission-utils";

class Input {
    static async getInput() {
        const input = await MissionUtils.Console.readLineAsync('덧셈할 문자열을 입력해 주세요.\n');
        return input;
    }
}

export default Input;