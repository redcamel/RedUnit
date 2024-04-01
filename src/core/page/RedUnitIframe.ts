import CONST_COUNT_EVENT from "../CONST_COUNT_EVENT";
import RedUnitTotalState from "./RedUnitTotalState";

class RedUnitIframe {
	#wrap: HTMLDivElement
	#title: any
	#iframe: HTMLIFrameElement

	constructor(title: string, src: string, totalState: RedUnitTotalState) {
		this.createAndAppendElements(title, src);
		this.addUnitNumListener(totalState)
	}

	createAndAppendElements(title: string, src: string) {
		this.#wrap = this.#createDomElement('red-unit-iframe-wrap');
		this.#title = this.#createAnchorElement(title, src);
		this.#iframe = this.#createIframeElement('red-unit-iframe', src);
		this.#wrap.appendChild(this.#title);
		this.#wrap.appendChild(this.#iframe);
		document.body.appendChild(this.#wrap);
	}

	addUnitNumListener(totalState: RedUnitTotalState) {
		this.#iframe.contentWindow.addEventListener(CONST_COUNT_EVENT.ADD_UNIT_NUM, () => {
			totalState.increaseUnitNum()
		})
		this.#iframe.contentWindow.addEventListener(CONST_COUNT_EVENT.PASS_UNIT_NUM, () => {
			totalState.increasePassUnitNum()
		})
		this.#iframe.contentWindow.addEventListener(CONST_COUNT_EVENT.FAIL_UNIT_NUM, () => {
			totalState.increaseFailUnitNum()
		})
	}

	#createDomElement<T extends HTMLElement>(className: string, tagName: string = 'div'): T {
		let element = document.createElement(tagName);
		element.setAttribute('class', className);
		return element as T;
	}

	#createAnchorElement(title: string, href: string) {
		let titleElement = this.#createDomElement('red-unit-iframe-title', 'a');
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

export default RedUnitIframe
