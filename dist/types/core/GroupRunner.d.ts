import RedUnit from "../RedUnit";
declare class GroupRunner {
    #private;
    constructor(redUnit: RedUnit, groupTitle: string, initFunc: any);
    defineTest: (title: any, testFunc: any, expectValue: any) => void;
    run(passYn: boolean): void;
}
export default GroupRunner;
