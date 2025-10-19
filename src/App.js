import Input from './Input.js';
import Output from './Output.js';
import Validator from './Validator.js';
import Calculator from './Calculator.js';

class App {
  async run() {
    const input = await Input.getInput();

    if (!input) {
      return Output.printResult(0);
    }

    try {
      const { testInput, testDelimiter } = Validator.validate(input);
      const result = Calculator.sum(testInput, testDelimiter);
      Output.printResult(result);

    } catch (error) {
      console.error(error.message);
      throw error;
    }
  }
}

export default App;