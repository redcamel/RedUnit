
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import createDomElement from "./createDomElement";
import CONST_PAGE_COUNT_EVENT from "./page/CONST_PAGE_COUNT_EVENT";
import GroupRunner from "./GroupRunner";

class UnitTest {
	#dom!: HTMLElement;
	#testFunc: Function;
	#expectValue: any;
	#isPass: boolean = false;
	#openYn: boolean = false;

	get expectValue() {
		return this.#expectValue;
	}

	constructor(title: string, testFunc: Function, expectValue: any) {
		this.#testFunc = testFunc;
		this.#expectValue = expectValue;
		this.#initializeDom(title);
		dispatchEvent(new CustomEvent(CONST_PAGE_COUNT_EVENT.ADD_UNIT_NUM));
	}

	get dom() {
		return this.#dom;
	}

	execute(runner: GroupRunner) {
		try {
			this.#testFunc((resultValue: any, error: any) => {
				if (Array.isArray(this.#expectValue) && Array.isArray(resultValue)) {
					this.#isPass = this.#expectValue.every((v, i) => v === resultValue[i]);
				} else {
					this.#isPass = this.#expectValue === resultValue;
				}
				this.#openYn = !this.#isPass;
				this.determinePassFailAndDispatchEvent(this.#isPass);
				
				const resultDom = this.#dom.querySelector('.result');
				if (resultDom) resultDom.textContent = JSON.stringify(resultValue);
				
				const passFailDom = this.#dom.querySelector('.pass-fail');
				if (passFailDom) {
					passFailDom.textContent = `${this.#isPass ? 'PASS' : 'FAIL'}`;
					passFailDom.className = `pass-fail ${this.#isPass ? 'pass' : 'fail'}`;
				}
				
				const errorDom = this.#dom.querySelector('.error');
				if (errorDom) errorDom.textContent = error;
				
				this.#updateDisplayByResult()
				runner.run(this.#isPass)
				const codeElement = this.#dom.querySelector('code');
				if (codeElement) Prism.highlightElement(codeElement);
			});
		}catch (e: any) {
			this.#openYn = true;
			this.#isPass = false;
			this.determinePassFailAndDispatchEvent(this.#isPass);
			
			const passFailDom = this.#dom.querySelector('.pass-fail');
			if (passFailDom) {
				passFailDom.textContent = 'FAIL';
				passFailDom.className = 'pass-fail fail';
			}
			
			const errorDom = this.#dom.querySelector('.error');
			if (errorDom) errorDom.textContent = e.message || e;
			
			this.#updateDisplayByResult()
			runner.run(false)
			const codeElement = this.#dom.querySelector('code');
			if (codeElement) Prism.highlightElement(codeElement);
		}
	}
	#updateDisplayByResult(){
		const codeWrap = this.#dom.querySelector('.red-unit-test-code-wrap') as HTMLElement;
		if (codeWrap) codeWrap.style.display = this.#openYn ? '' : 'none';
		
		const testWrap = this.#dom.querySelector('.red-unit-test-wrap') as HTMLElement;
		if (testWrap) testWrap.style.background = `${this.#isPass ? '' : '#2d0000'}`;
		
		const openClose = this.#dom.querySelector('.red-unit-test-title-open-close');
		if (openClose) openClose.innerHTML = `${this.#openYn ? 'close' : 'open'}`;
	}

	determinePassFailAndDispatchEvent(isPass: boolean) {
		const event = isPass ? CONST_PAGE_COUNT_EVENT.PASS_UNIT_NUM : CONST_PAGE_COUNT_EVENT.FAIL_UNIT_NUM;
		dispatchEvent(new CustomEvent(event));
	}

	#initializeDom(title: string) {
		this.#dom = createDomElement();
		this.#dom.innerHTML = ` 
			<div class="red-unit-test-wrap">
				<div class="red-unit-test-title-wrap">
					<div class="red-unit-test-title">${title}</div>
					<div class="red-unit-test-title-open-close"></div>
				</div>
				<pre class="red-unit-test-code-wrap" style="display: none">${formatCodeSnippet(`${this.#testFunc}`)}</pre>
				<div class="red-unit-test-result-wrap">
					<span class="pass-fail"></span>
					<div class="pass-fail"><span>expect</span> : ${JSON.stringify(this.#expectValue)}</div>
					<div class="pass-fail"><span>result</span> : <span class="result"></span></div>
				</div>
				<div class="error"></div>
				
			</div> 
		`;
		document.body.appendChild(this.#dom);

		const titleWrap = this.#dom.querySelector('.red-unit-test-title-wrap');
		if (titleWrap) {
			titleWrap.addEventListener('click',()=>{
				this.#openYn = !this.#openYn
				this.#updateDisplayByResult()
			})
		}
	}
}

function formatCodeSnippet(input: string): string {
	return `<code class="language-javascript">${input}</code>`;
}


export default UnitTest;
