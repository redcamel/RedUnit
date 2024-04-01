import createDomElement from "../createDomElement";
import CONST_PAGE_COUNT_EVENT from "./CONST_PAGE_COUNT_EVENT";
import TotalPageState from "./TotalPageState";

class PageContainer {
	#wrap: HTMLDivElement
	#title: any
	#iframe: HTMLIFrameElement

	constructor(title: string, src: string, totalState: TotalPageState) {
		this.createAndAppendElements(title, src);
		this.addListeners(totalState)
	}

	createAndAppendElements(title: string, src: string) {
		this.#wrap = createDomElement('red-unit-iframe-wrap');
		this.#title = this.#createAnchorElement(title, src);
		this.#iframe = this.#createIframeElement('red-unit-iframe', src);
		this.#wrap.appendChild(this.#title);
		this.#wrap.appendChild(this.#iframe);
		document.body.appendChild(this.#wrap);
	}

	addListeners(totalState: TotalPageState) {
		this.#iframe.contentWindow.addEventListener(CONST_PAGE_COUNT_EVENT.ADD_UNIT_NUM, () => {
			totalState.increaseTotalUnitNum()
		})
		this.#iframe.contentWindow.addEventListener(CONST_PAGE_COUNT_EVENT.PASS_UNIT_NUM, () => {
			totalState.increaseTotalPassUnitNum()
		})
		this.#iframe.contentWindow.addEventListener(CONST_PAGE_COUNT_EVENT.FAIL_UNIT_NUM, () => {
			totalState.increaseTotalFailUnitNum()
		})
	}

	#createAnchorElement(title: string, href: string) {
		let titleElement = createDomElement('red-unit-iframe-title', 'a');
		titleElement.innerHTML = `${title}`;
		// @ts-ignore
		titleElement.href = href
		return titleElement;
	}

	#createIframeElement(className: string, src: string): HTMLIFrameElement {
		let iframe = document.createElement('iframe');
		iframe.src = src;
		iframe.setAttribute('class', className);
		return iframe;
	}
}

export default PageContainer
