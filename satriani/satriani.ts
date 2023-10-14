import parser from './satriani.parser.js';
import interpreter = './satriani.interpreter.js';

class Interpreter {
    public run (program: any, input: any, output: any) {
        if (typeof(program) == 'string') program = this.parse(program);
        let env = new interpreter.Environment();
        env.output = output || console.log;
        env.input = input || (() => "");
        return env.run(program);
    }
    public parse = function(program) {
        return parser.parse(program);
    }
};

export {
    Interpreter
}