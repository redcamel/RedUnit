
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import createDomElement from "./createDomElement";
import CONST_PAGE_COUNT_EVENT from "./page/CONST_PAGE_COUNT_EVENT";

class UnitTest {
	#dom;
	#testFunc;
	#expectValue;
	#isPass:boolean;
	#openYn:boolean;

	get expectValue() {
		return this.#expectValue;
	}

	constructor(title, testFunc, expectValue) {
		this.#testFunc = testFunc;
		this.#expectValue = expectValue;
		this.#initializeDom(title);
		dispatchEvent(new CustomEvent(CONST_PAGE_COUNT_EVENT.ADD_UNIT_NUM));
	}

	get dom() {
		return this.#dom;
	}

	execute(runner) {


		try {
			this.#testFunc((resultValue, error) => {
				if (Array.isArray(this.#expectValue) && Array.isArray(resultValue)) {
					this.#isPass = this.#expectValue.every((v, i) => v === resultValue[i]);
				} else {
					this.#isPass = this.#expectValue === resultValue;
				}
				this.#openYn = !this.#isPass;
				this.determinePassFailAndDispatchEvent(this.#isPass);
				this.#dom.querySelector('.result').textContent = JSON.stringify(resultValue);
				this.#dom.querySelector('.pass-fail').textContent = `${this.#isPass ? 'PASS' : 'FAIL'}`;
				this.#dom.querySelector('.pass-fail').className = `pass-fail ${this.#isPass ? 'pass' : 'fail'}`;
				this.#dom.querySelector('.error').textContent = error
				this.#updateDisplayByResult()
				runner.run(this.#isPass)
				Prism.highlightAll()
			});
		}catch (e) {
			this.#openYn = true;
			this.determinePassFailAndDispatchEvent(this.#isPass);
			this.#dom.querySelector('.pass-fail').textContent = `${this.#isPass ? 'PASS' : 'FAIL'}`;
			this.#dom.querySelector('.pass-fail').className = `pass-fail ${this.#isPass ? 'pass' : 'fail'}`;
			this.#dom.querySelector('.error').textContent = e
			this.#updateDisplayByResult()
			runner.run(false,e)
			Prism.highlightAll()

		}
	}
	#updateDisplayByResult(){
		this.#dom.querySelector('.red-unit-test-code-wrap').style.display = this.#openYn ? '' : 'none'
		this.#dom.querySelector('.red-unit-test-wrap').style.background = `${this.#isPass ? '' : '#2d0000'}`;
		this.#dom.querySelector('.red-unit-test-title-open-close').innerHTML = `${this.#openYn ? 'close' : 'open'}`;
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

		this.#dom.querySelector('.red-unit-test-title-wrap').addEventListener('click',()=>{
			this.#openYn = !this.#openYn
			this.#updateDisplayByResult()
		})
	}
}

function formatCodeSnippet(input: string): string {
	const options = {};
	const highlightedCode = input
	return `<code class="language-javascript">${highlightedCode}</code>`;
}


export default UnitTest;
