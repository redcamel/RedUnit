declare class TotalPageState {
    #private;
    constructor(title: string, testList: {
        title: string;
        src: string;
    }[]);
    increaseTotalUnitNum(): void;
    increaseTotalPassUnitNum(): void;
    increaseTotalFailUnitNum(): void;
    increaseTotalPassPageNum(): void;
    increaseTotalFailPageNum(): void;
}
export default TotalPageState;
