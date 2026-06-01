import { default as GroupRunner } from './core/GroupRunner';
declare class RedUnit {
    #private;
    constructor(title: string);
    static pageLoader(testName: string, testList: {
        title: string;
        src: string;
    }[], parentDom?: HTMLElement): void;
    testGroup: (groupTitle: string, initFunc: (runner: GroupRunner) => void) => void;
    increaseTotalCount(): void;
    updateState(result: boolean): void;
}
export default RedUnit;
