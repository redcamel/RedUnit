import 'prismjs/components/prism-javascript';
declare class UnitTest {
    #private;
    get expectValue(): any;
    constructor(title: any, testFunc: any, expectValue: any);
    get dom(): any;
    execute(runner: any): void;
    determinePassFailAndDispatchEvent(isPass: boolean): void;
}
export default UnitTest;
