import createDomElement from "../createDomElement";
import CONST_PAGE_COUNT_EVENT from "./CONST_PAGE_COUNT_EVENT";
import TotalPageState from "./TotalPageState";

class PageContainer {
	#wrap: HTMLDivElement
	get wrap(): HTMLDivElement {
		return this.#wrap;
	}

	#totalCount: number = 0
	#passCount: number = 0
	#failCount: number = 0
	#title: any
	#iframe: HTMLIFrameElement

	constructor(title: string, src: string, totalState: TotalPageState) {
		this.createAndAppendElements(title, src);
		requestAnimationFrame(() => this.addListeners(totalState))
	}

	createAndAppendElements(title: string, src: string) {
		this.#wrap = createDomElement('red-unit-iframe-wrap');
		this.#title = this.#createAnchorElement(title, src);
		this.#iframe = this.#createIframeElement('red-unit-iframe', src);
		this.#wrap.appendChild(this.#title);
		this.#wrap.appendChild(this.#iframe);
	}

	addListeners(totalState: TotalPageState) {
		const {contentWindow} = this.#iframe
		contentWindow.addEventListener(CONST_PAGE_COUNT_EVENT.ADD_UNIT_NUM, () => {
			totalState.increaseTotalUnitNum()
			this.#totalCount++
		})
		contentWindow.addEventListener(CONST_PAGE_COUNT_EVENT.PASS_UNIT_NUM, () => {
			totalState.increaseTotalPassUnitNum()
			this.#passCount++
			if (this.#passCount === this.#totalCount) {
				totalState.increaseTotalPassPageNum()
			}
		})
		contentWindow.addEventListener(CONST_PAGE_COUNT_EVENT.FAIL_UNIT_NUM, () => {
			totalState.increaseTotalFailUnitNum()
			if (this.#failCount == 0) {
				totalState.increaseTotalFailPageNum()
			}
			this.#failCount++
		})
	}

	#createAnchorElement(title: string, href: string) {
		const titleElement = createDomElement('red-unit-iframe-title', 'a');
		titleElement.innerHTML = `${title}<span class="red-unit-iframe-title-href">${href}</span>`;
		// @ts-ignore
		titleElement.href = href
		return titleElement;
	}

	#createIframeElement(className: string, src: string): HTMLIFrameElement {
		const iframe = document.createElement('iframe');
		iframe.src = src;
		iframe.setAttribute('class', className);
		return iframe;
	}
}
Object.freeze(PageContainer)
export default PageContainer
