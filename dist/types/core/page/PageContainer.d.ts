import TotalPageState from "./TotalPageState";
declare class PageContainer {
    #private;
    get wrap(): HTMLDivElement;
    constructor(title: string, src: string, totalState: TotalPageState);
    createAndAppendElements(title: string, src: string): void;
    addListeners(totalState: TotalPageState): void;
}
export default PageContainer;
