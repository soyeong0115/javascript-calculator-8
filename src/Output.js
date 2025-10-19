import { MissionUtils } from "@woowacourse/mission-utils";

class Output {
    static printResult(result) {
        MissionUtils.Console.print(`결과 : ${result}`);
    }
}

export default Output;