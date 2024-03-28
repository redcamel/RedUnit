import UnitTest from "../UnitTest";

class RedUnitIframe {
	#wrap: HTMLDivElement
	#state: HTMLDivElement
	#title: HTMLAnchorElement
	#iframe: HTMLIFrameElement
	#totalCount :number = 0
	#passCount :number = 0
	#failCount :number = 0

	constructor(title: string, src: string,totalState:RedUnitTotalState) {
		this.createAndAppendElements(title, src);
		this.addUnitNumListener(totalState);
	}
	#createDomElement<T extends HTMLElement>(className: string, tagName: string = 'div'): T {
		let element = document.createElement(tagName);
		element.setAttribute('class', className);
		return element as T;
	}
	#createAnchorElement(title: string,href:string):HTMLAnchorElement {
		let titleElement = this.#createDomElement('red-unit-iframe-title', 'a');
		titleElement.innerHTML = `${title}`;
		titleElement.href = href
		return titleElement;
	}
	#createIframeElement(className: string, src: string): HTMLIFrameElement {
		let iframe = document.createElement('iframe');
		iframe.src = src;
		iframe.setAttribute('class', className);
		return iframe;
	}
	createAndAppendElements(title: string, src: string) {
		this.#wrap = this.#createDomElement('red-unit-iframe-wrap');
		this.#title = this.#createAnchorElement(title,src);
		this.#state = this.#createDomElement('');
		this.#state.innerHTML =`
			<div class="red-unit-iframe-state-box">
				<div>pass : <span class="unit-pass-count">${this.#passCount}</span></div>
				/<div>fail : <span class="unit-fail-count">${this.#failCount}</span></div>
				/<div>total : <span class="unit-total-count">${this.#totalCount}</span></div>
			</div>
		`
		this.#iframe = this.#createIframeElement('red-unit-iframe', src);
		this.#wrap.appendChild(this.#title);
		this.#wrap.appendChild(this.#state);
		this.#wrap.appendChild(this.#iframe);
		document.body.appendChild(this.#wrap);
	}
	addUnitNumListener(totalState:RedUnitTotalState) {
		this.#iframe.contentWindow.addEventListener('ADD_UNIT_NUM', () => {
			this.#totalCount++
			this.#state.querySelector('.unit-total-count').innerHTML = this.#totalCount.toLocaleString()
			totalState.addTotalPageCount()
		})
	}
}
export default RedUnitIframe
