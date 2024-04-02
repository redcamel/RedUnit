import RedUnit from "../RedUnit";
declare class Runner {
    #private;
    constructor(redUnit: RedUnit, groupTitle: string, initFunc: any);
    defineTest: (title: any, testFunc: any, expectValue: any) => void;
    run(result: any): void;
}
export default Runner;
