import 'prismjs/themes/prism-tomorrow.css';
import './core/RedUnit.css';
declare class RedUnit {
    #private;
    constructor(title: string);
    static pageLoader(testName: string, testList: {
        title: string;
        src: string;
    }[], parentDom: any): void;
    testGroup: (groupTitle: string, initFunc: any) => void;
    increaseTotalCount(): void;
    updateState(result: any): void;
}
export default RedUnit;
